#!/usr/bin/env bash
# Voice/register gates for mrbese.com. Wired into `npm run deploy`; a non-zero
# exit blocks the ship. --src runs pre-build checks, --dist runs post-build.
set -euo pipefail
cd "$(dirname "$0")/.."
MODE="${1:---src}"
fail=0

if [ "$MODE" = "--src" ]; then
  # Retired "why" motif must not return (iron rule since the 2026-07 reframe)
  if grep -rniE "ask(ing)? why|why for a living" src/ --include='*.astro' --include='*.ts' --include='*.md' --include='*.mdx'; then
    echo "GATE FAIL: retired why-motif found in src/"; fail=1
  fi
  # No em dashes anywhere (site iron rule)
  if grep -rn "—" src/; then
    echo "GATE FAIL: em dash found in src/"; fail=1
  fi
  # Retired pretension pattern in titles ("building a thesis on X"; a real
  # academic thesis in the timeline is fine)
  if grep -rni "building a thesis" src/; then
    echo "GATE FAIL: 'building a thesis' framing found"; fail=1
  fi
  # Display italic is retired (2026-07-30): no font-style:italic in a --display context
  if grep -rn "font-style:italic" src/ | grep -v "prose em\|prose a\|\.sub\|\.intro\|\.now\|standfirst{" | grep "display"; then
    echo "GATE FAIL: display-role italic found"; fail=1
  fi
  [ $fail -eq 0 ] && echo "src gates: PASS"
elif [ "$MODE" = "--dist" ]; then
  [ -d dist ] || { echo "GATE FAIL: dist/ missing (build first)"; exit 1; }
  if grep -rlni "why for a living\|built by asking" dist/ --include='*.html'; then
    echo "GATE FAIL: retired motif in built output"; fail=1
  fi
  if grep -rln "—" dist/ --include='*.html'; then
    echo "GATE FAIL: em dash in built output"; fail=1
  fi
  python3 - <<'PY' || fail=1
import glob, re, sys
bad = 0
for f in glob.glob('dist/**/*.html', recursive=True):
    html = open(f, encoding='utf-8').read()
    h1s = re.findall(r'<h1[\s>]', html)
    if len(h1s) != 1:
        print(f"GATE FAIL: {f} has {len(h1s)} h1 elements"); bad = 1
        continue
    main = re.search(r'<main id="main".*?</main>', html, re.S)
    if not main or '<h1' not in main.group(0):
        print(f"GATE FAIL: {f} h1 is not inside <main id=\"main\">"); bad = 1
    m = re.search(r'<meta name="description" content="([^"]*)"', html)
    if m and len(m.group(1)) > 160:
        print(f"GATE FAIL: {f} meta description is {len(m.group(1))} chars (max 160)"); bad = 1
sys.exit(bad)
PY
  [ $fail -eq 0 ] && echo "dist gates: PASS"
else
  echo "usage: gates.sh [--src|--dist]"; exit 2
fi
exit $fail
