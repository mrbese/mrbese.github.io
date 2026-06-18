import type { Metadata } from "next";
import { Reveal } from "@/components/Reveal";
import { PageHead } from "@/components/PageHead";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Open-source tools for home energy. ManorOS, CellSense, HazShip.",
};

type Project = {
  name: string;
  tagline: string;
  description: string;
  stack: string;
  repo: string;
};

const PROJECTS: Project[] = [
  {
    name: "ManorOS",
    tagline: "iOS home energy auditor",
    description:
      "An open-source home energy assessment tool. LiDAR room scanning via Apple RoomPlan, HVAC equipment logging with on-device OCR via Apple Vision, appliance detection, window assessment, and ACCA Manual J BTU calculations. It generates tiered upgrade recommendations with payback periods and battery-synergy insights. The thesis: an inefficient building envelope directly cannibalizes home-battery ROI during peak grid events ($2,000 to $5,000 per MWh).",
    stack:
      "Swift, SwiftUI, SwiftData, ARKit, RoomPlan, AVFoundation, Vision OCR, CoreLocation, PDFKit",
    repo: "github.com/mrbese/ManorOS",
  },
  {
    name: "CellSense",
    tagline: "Battery ROI calculator",
    description:
      "Compare Tesla Powerwall 3, Enphase IQ 5P, Pila Mesh, and Base Power side by side. Supports 16 utilities, 32 rate plans, NEM 3.0, and VPP earnings projections for ELRP, ConnectedSolutions, and ERCOT.",
    stack:
      "Pure vanilla JavaScript. Zero dependencies. Dark glassmorphism UI with canvas-based charts.",
    repo: "github.com/mrbese/cellsense",
  },
  {
    name: "HazShip",
    tagline: "Lithium battery HAZMAT shipping classifier",
    description:
      "Encodes the entire regulatory decision tree for 49 CFR 173.185, IATA DGR 66th Edition, and IMDG Code Amendment 42-24. Outputs UN numbers, packing instructions, labels, and documentation checklists. Built from direct experience shipping lithium-ion medical devices through FDA clearance.",
    stack:
      "SwiftUI (iOS 17+). Pure engine pattern. Zero dependencies. Fully offline.",
    repo: "github.com/mrbese/HazShip",
  },
];

export default function ProjectsPage() {
  return (
    <div className="cv-region">
      <div className="rail-line" aria-hidden="true" />

      <PageHead
        eyebrow="Building"
        title="Energy tools"
        status="Open source"
        facts={[
          ["Source", "github.com/mrbese"],
          ["Focus", "Home energy"],
        ]}
        lede={
          <>
            Open-source tools I built to answer my own questions about home
            energy. Zero dependencies where I can manage it. All on GitHub.
          </>
        }
      />

      {PROJECTS.map((p, i) => (
        <Reveal
          as="section"
          className={`cv-row${i === 0 ? " cv-row--first" : ""}`}
          key={p.name}
        >
          <div className="cv-row__label">
            <span>{String(i + 1).padStart(2, "0")}</span>
          </div>
          <div className="cv-row__body cv-row__body--tight">
            <article className="proj">
              <div className="proj__head">
                <h2 className="proj__name">{p.name}</h2>
                <span className="proj__tag">{p.tagline}</span>
              </div>
              <p className="proj__desc">{p.description}</p>
              <p className="proj__stack">{p.stack}</p>
              <a
                className="row-link proj__link"
                href={`https://${p.repo}`}
                target="_blank"
                rel="noopener noreferrer"
                data-magnetic
              >
                {p.repo}{" "}
                <span className="ext" aria-hidden="true">
                  ↗
                </span>
              </a>
            </article>
          </div>
        </Reveal>
      ))}
    </div>
  );
}
