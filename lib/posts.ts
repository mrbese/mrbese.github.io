// The Deep Dives. Real article bodies ported verbatim from the previous
// mrbese.com (the <details>/<summary> accordions in the live index.html).
// `content` may contain <strong> emphasis only.
export type DeepItem = { summary: string; content: string };
export type DeepGroup = { title: string; intro: string; items: DeepItem[] };
export type Post = {
  slug: string;
  title: string;
  dek: string;
  research: string;
  learned: DeepGroup;
  wouldDo: DeepGroup;
};

export const POSTS: Post[] = [
  {
    "slug": "base-power",
    "title": "What I Would Do at Base Power",
    "dek": "Verticalize further, then buy the cost-of-capital arbitrage California gives away.",
    "research": "60+ hours",
    "learned": {
      "title": "What I Learned About Base Power",
      "intro": "60+ hours of primary source research across ERCOT filings, Potomac Economics, Modo Energy, CPUC, CAISO, IRS guidance, and Base Power's own spec pages.",
      "items": [
        {
          "summary": "The Gentailer Model. Actually Executed.",
          "content": "Most battery companies sell you an $18,000 box and disappear. Base Power does not. Starting <strong>$695 upfront</strong>. $19/month. They own the hardware. You get backup power and a lower electricity bill. They eat the arbitrage and virtual power plant revenue. Simple pitch. But there is a specific structural reason it works when everyone running a similar thesis has failed. \"Gentailer\" means you're the generator and the retailer simultaneously. In Texas's deregulated ERCOT market, most REPs buy power at wholesale prices and sell at fixed rates. When prices spike, retailers bleed. Generators love those spikes. Base Power owns both sides of that trade: the battery is the generation asset, the customer relationship is the retail contract. The same price event that hits the retail book prints money in the dispatch book. That <strong>internal hedge</strong> is why the unit economics hold when they should not. The customer pays once. Gets whole-home backup. Gets below-market energy rates. Base owns the distributed energy asset and collects grid revenue from wholesale dispatch around the clock. The subscription alone runs <strong>$228 to $348 per home per year</strong>. Grid trading sits on top of that."
        },
        {
          "summary": "The Cost Basis. Not the Technology.",
          "content": "Base does not manufacture batteries. They assemble them. CATL makes the lithium iron phosphate cells in China. Base imports those cells at roughly <strong>$55/kWh</strong> and assembles at a 90,000 sq ft facility in Austin. Off-the-shelf integrators buy finished modules at around $100/kWh. Result: Base's 25 kWh single-unit system costs roughly <strong>$2,500 to $3,000 to build</strong> versus $6,000 to $8,000 for comparable off-the-shelf configurations. Cell fabrication is a commodity race they cannot win and do not try to. They control stages 3 through 5: module assembly, pack integration, proprietary inverter. Ford did not invent the assembly line. He borrowed the concept from Chicago slaughterhouses where master butchers were the production bottleneck. Base did the same thing. The factory exists to make the installer stupid-fast. <strong>The bottleneck was never manufacturing. It is installation crews.</strong>"
        },
        {
          "summary": "The IRA. Working Capital Flywheel.",
          "content": "Section 48E ITC gives <strong>30% back on Fair Market Value, not on COGS</strong>. COGS is roughly $3,000. Retail fair market value is roughly $10,000. The 30% credit returns approximately $3,000 per unit. The <strong>hardware effectively pays for itself</strong> before the customer writes a check. US assembly triggers the domestic content adder, pushing the total investment tax credit toward 40%. Section 6418 transferability closes the loop. Base can sell those credits immediately at <strong>91 to 94 cents on the dollar</strong>. Deploy, generate credit, sell, redeploy. That is the working capital engine behind deployment velocity."
        },
        {
          "summary": "The Inverter. Not a Commodity.",
          "content": "Base publishes <strong>11.4 kW max continuous real power</strong> for both the single-unit 25 kWh system and the dual-unit 50 kWh system. SolarEdge and Enphase are designed for solar self-consumption. Wrong tool for this job. Base needs bidirectional, millisecond-latency, grid-forming power electronics that auto-switch in under 0.5 seconds. Why 11.4 kW matters in ERCOT: the real-time SWCAP sits at <strong>$2,000/MWh</strong>. The day-ahead SWCAP is $5,000/MWh. During those events, 11.4 kW dispatching versus a competitor's 5 kW is the difference between full revenue capture and watching half the value disappear. <strong>The inverter is the monetization engine.</strong>"
        },
        {
          "summary": "The ERCOT Revenue Collapse. And What Survived.",
          "content": "ERCOT battery storage grew from under 1 GW in 2021 to approximately 13.9 GW by early 2026. ECRS clearing prices fell from $76.77/MWh in 2023 to $9.62/MWh in 2024: an <strong>87% collapse</strong>. Total battery revenue fell <strong>75 to 78%</strong>. Companies that built their model on ancillary service revenue with $8,000 system COGS are finished. Base survives because their <strong>cost basis is below $3,000</strong>. The 4CP peak billing optimization does not care what ancillary prices are doing. The ADER program: ERCOT expanded the Aggregated Distributed Energy Resources cap to 200 MW system-wide. December 2025: ERCOT launched Real-Time Co-optimization plus Batteries."
        },
        {
          "summary": "Volatility Paradox. Hoax.",
          "content": "The conventional narrative: more batteries suppress the price spikes that justify building batteries. But the ERCOT large-load interconnection queue shows approximately <strong>233 GW of pending new load</strong>. AI data centers, EV charging, and industrial electrification could add 20 to 30 GW of flat, continuous baseload demand. If this materializes faster than storage grows, the reserve margin compresses back toward <strong>sub-15%</strong>, where scarcity events become frequent again and <strong>batteries print money</strong>."
        },
        {
          "summary": "The Funding. AC vs DC.",
          "content": "<strong>$1.3 billion total</strong>. $1 billion Series C in October 2025, led by Addition at a <strong>$4 billion valuation</strong>. Andreessen Horowitz, Lightspeed, Thrive, CapitalG, and Ribbit all participated. The Warren Buffett inside me is screaming, \"<strong>Sunrun!</strong>\" Volatility is the middle name of this game. It seems like anything that touches electricity eventually copies its sine wave. Here's hoping Base's valuation adopts DC."
        }
      ]
    },
    "wouldDo": {
      "title": "What I Would Do at Base Power",
      "intro": "The ERCOT revenue collapse is well-documented. 87% drop in ancillary service clearing prices. Companies carrying $8,000 system COGS are done. Base Power is not, because they verticalized hard and early. But verticalization is a direction, not a destination. Here is what I would do next. Actual numbers, because strategic frameworks without specifics are just opinions.",
      "items": [
        {
          "summary": "The Thermal Battery: Liberating an extra 2 kW",
          "content": "There is a framing problem costing Base money every day. The battery is competing with the home for power. Both systems are capped at 11.4 kW continuous output. <strong>EXPORT CAPACITY = 11.4 kW - HOUSE LOAD</strong>. A standard Texas home draws 5 to 6 kW on a summer afternoon. By liberating an extra 2 kW per home through passive upgrades (attic insulation R-49, aerosol duct sealing, ECM blower motor swap), Base yields <strong>33% to 40% more export capacity</strong> from the exact same hardware. Across a 30,000-home fleet this translates to <strong>$2.4M to $6.0M</strong> in additional annual revenue."
        },
        {
          "summary": "The Moat. Decoupled Installation.",
          "content": "Base's install schedule is broken into specialized nodes. Phase 1: Material Drop-off alongside battery hardware. Phase 2: Parallel Workflow where unlicensed insulation crew works inside while electrical crew works outside. Phase 3: Cleanup. <strong>Zero additional customer acquisition cost</strong> and zero extra truck rolls. This structural advantage saves <strong>$650 to $1,100 per home</strong>. At 40 installs/day with a 30% upsell rate, that generates a <strong>$2M to $3M annual</strong> operational advantage."
        },
        {
          "summary": "California. The Financial Arbitrage.",
          "content": "Texas: SOFR + 350-450 bps, 50% LTV. California's Resource Adequacy: <strong>SOFR + 175-250 bps, up to 75-80% LTV</strong>. Same cells. Same inverter. Different contract. On a blended $100M portfolio this saves <strong>$900k to $1.5M annually</strong> in interest expense. San Diego entry via SDG&E rates (<strong>$0.39-$0.40/kWh</strong>) and CCA partnerships."
        },
        {
          "summary": "The Capital Flywheel",
          "content": "California offers the steady, predictable \"<strong>Direct Current</strong>\" of regulated returns, shielding Base Power from the troughs of Texas's wild \"<strong>Alternating Current</strong>\" while letting them bank the crests."
        }
      ]
    }
  },
  {
    "slug": "pila-energy",
    "title": "What I Would Do at Pila Energy",
    "dek": "Pull the two operational levers already on the balance sheet. Both unlock distribution Pila is paying for and not using.",
    "research": "3 weeks",
    "learned": {
      "title": "What I Learned About Pila Energy",
      "intro": "Three weeks of source research across the founder's interviews, the Pila tech-specs page, R7 / Toyota Ventures / Refactor portfolio theses, ERCOT and CAISO renter-grid filings, NEC 2023 article 706 storage rules, and Hacker News thread #43333661 where Cole Ashman defended the design choice live. All numbers from primary sources. Disclaimer: applied via Dover, still ghosted. ✌🏻",
      "items": [
        {
          "summary": "The Permissionless Insight. Not the Battery.",
          "content": "Most home batteries sell you a $15,000 wall fixture, a permit application, and a six-week wait. Pila Energy does not. The Mesh Home Battery plugs into a <strong>NEMA 5-15 wall outlet</strong>. That single design choice reclassifies the device under the National Electrical Code from a \"Permanent Electrical Improvement\" to a <strong>\"Portable Appliance,\"</strong> and that one word swap collapses the entire installation industry that sits on top of residential storage today. No permit. No utility interconnection agreement. No electrician. No inspection. Anti-islanding is enforced physically (an internal transfer switch isolates the device in roughly <strong>20 milliseconds</strong>), not via paperwork. This is regulatory arbitrage, not a battery innovation. Tesla, Enphase, and Sunrun cannot follow without rebuilding their entire installer network, which is the asset they spent the last decade building."
        },
        {
          "summary": "The Founder. Trauma to Architecture.",
          "content": "Cole Ashman grew up in New Orleans. He was thirteen when Hurricane Katrina took the grid down for two weeks. The image he keeps coming back to is not the flooding. It is the rows of refrigerators residents dragged to the curb because the food inside had spoiled. A grid failure is not abstract to him. It is an appliance event. Chemical Engineering at Tulane (2016), then Tesla (Powerwall, Backup Gateway, Solar Inverter), then SPAN (led product on the panel that gave you circuit-level visibility). Pila is the synthesis: <strong>build-quality discipline of Tesla, appliance intelligence of SPAN, explicit rejection of the homeownership prerequisite</strong> that gates both. The unit is sized to keep one fridge running for <strong>32 hours</strong>. Not the AC. Not the EV. The fridge. That single constraint is the entire spec sheet in disguise."
        },
        {
          "summary": "The Hardware. 1.6 kWh and the Real Number That Matters.",
          "content": "<strong>1.6 kWh</strong> capacity per unit. LFP chemistry. 3,000+ cycles. 10-year design life, 5-year warranty. About 45 pounds, which is the polite way of saying \"fits inside FedEx Ground without freight palletization but still triggers HazMat UN38.3 paperwork.\" That weight number is an operations decision dressed as an engineering spec. The output spec is the one most reviewers miss: <strong>2.4 kW continuous, 7.8 kW peak for 500 milliseconds</strong>. That peak number is the whole game. Inductive loads (fridge compressors, well pumps, AC condensers) draw a current spike at startup that is three to five times their running draw. Most portable power stations rate themselves on continuous output and quietly fail the surge test. Pila's 7.8 kW surge is not over-engineering. It is the spec line that decides whether the product does the one job it promises."
        },
        {
          "summary": "The Mesh. Sub-GHz, Not WiFi.",
          "content": "Multiple Pila units coordinate over a proprietary wireless mesh on the <strong>900 MHz ISM band</strong>. Sub-GHz penetrates walls, concrete, and floors. WiFi at 2.4 and 5 GHz does not, which is why every smart-home device with a \"weak signal\" support ticket is a 2.4 GHz device pretending walls are made of air. By skipping WiFi for the inter-unit layer, Pila removes the customer's home network from the dependency graph. The mesh is also <strong>\"coordinator-less,\"</strong> meaning no master unit failure takes the system down. A measurable percentage of customer-support tickets that competitors absorb (pairing failures, signal drops, router-reboot cascades) never get filed in the first place. The mesh is a <strong>CX strategy disguised as an RF design.</strong>"
        },
        {
          "summary": "The Market. 44 Million Renters Nobody Was Selling To.",
          "content": "The U.S. has roughly <strong>44 million renter households</strong>, structurally locked out of residential storage. You cannot drill a Powerwall into a wall you do not own. You cannot sign a 20-year solar lease on an apartment. You cannot pull a permit your landlord will not co-sign. Above this \"missing middle\": Tesla, Enphase, Sunrun selling $15K+ infrastructure to homeowners. Below it: EcoFlow, Anker, Jackery selling $800 power stations to van-lifers. The middle was empty not because the demand was not there but because the regulatory plumbing made the unit economics impossible. <strong>Plug-and-play breaks that gate.</strong> Pila's TAM is the subset of those 44M who have experienced an outage in the last two years and remember it. After Helene, after the 2021 Texas freeze, after every wildfire de-energization in California, that subset is much larger than the storage industry has been pricing in."
        },
        {
          "summary": "The Cap Table. Read It Like an Operations Memo.",
          "content": "<strong>$4M Seed</strong>, October 2025. The check size is small. The signaling is not. <strong>R7 Partners</strong> (lead) writes for \"fundamental disruption\" deep tech, voting for the mesh and regulatory framing as the moat, not chemistry. <strong>Toyota Ventures Climate Fund</strong> is the line that should make any incoming Operations Lead's eyes light up. The Toyota Production System is not a slide deck; it is an operating manual for high-mix low-volume scaling. <strong>Refactor Capital</strong> (Zal Bilimoria, ex-a16z) backs hard tech with patience. <strong>GS Futures</strong> is the corporate VC of GS Group, the Korean conglomerate that owns GS E&C, one of the largest engineering and construction firms in Asia. That cap-table line is a multifamily distribution channel waiting for an Ops Lead to wire up."
        },
        {
          "summary": "Pila vs. Base Power. Different Bets, Same Macro.",
          "content": "Both companies look superficially similar (residential battery, distributed grid asset, climate thesis), but the strategic bets are opposite. <strong>Base Power went vertical</strong>: own the manufacturing, the inverter, the customer relationship, the dispatch software, the gentailer license. Whole-home backup at 11.4 kW with grid-services revenue beats every other model in ERCOT volatility. <strong>Pila went modular</strong>: own the chemistry-agnostic mesh, the permissionless wedge, and a brand that the renter demographic actually trusts. Both are correct, in their respective markets. <strong>Texas needs Base. The other forty-nine states need Pila.</strong> The interesting question is what happens when the regulatory walls between them start coming down. ERCOT's ADER program already permits aggregated DERs up to 200 MW. CAISO's DERMS framework is moving in the same direction. If Pila's mesh ever gets aggregated into a VPP at scale, it stops being a refrigerator backup and becomes a peer-to-peer utility."
        },
        {
          "summary": "The Valley of Death.",
          "content": "Seed-stage hardware companies do not fail at engineering. They fail at the transition from prototype to volume. Cell procurement is locked in months ahead of revenue. HazMat shipping is expensive. Reverse logistics is brutal. Customer support burn rates compound. <strong>The Operations Lead role at a $4M-seed company is not a job. It is a load-bearing wall.</strong> Pila has the founder, the product, the moat, and the cap table. What it needs now is somebody who can move atoms."
        }
      ]
    },
    "wouldDo": {
      "title": "What I Would Do at Pila Energy",
      "intro": "Two strategic actions, both grounded in operational physics, both leveraging assets already on Pila's balance sheet. The actual job of an Operations Lead is identifying which existing assets are operational levers in disguise. Two of them are not being pulled today. Here is what they unlock.",
      "items": [
        {
          "summary": "The GS E&C Channel. Pre-Installed Resilience as Move-In Amenity.",
          "content": "GS Futures' check was $1M of $4M. The strategic value of GS E&C (one of Asia's largest construction firms with active North American JV pipelines) is several orders of magnitude bigger than that ratio. The Pila DTC cost stack today: customer acquisition <strong>$180-$220</strong>, HazMat shipping $35-$55, first-30-day support $25-$40, last-mile damage $15-$25. <strong>$255-$340 per unit gone before the unit pays for itself</strong>. Now ship in pallet quantities to a GS E&C development site, hand the unit to the tenant at move-in along with the fridge and dishwasher. Every cost line above goes to zero. CAC is the lease. Shipping is freight. First-touch support sits with building maintenance. At 40 units per site and 30 sites in 2027 at 30% landed, that is <strong>$94,000 in pure margin recapture in year one</strong> on top of unit revenue, plus negative-CAC brand acquisition paid for in concrete and rebar."
        },
        {
          "summary": "The Operational Wiring. B2B SKU + Site Coordinators.",
          "content": "The work is not \"ask GS E&C nicely.\" Build a <strong>B2B SKU and contract template</strong> that survives net-30 terms, EDI integration, and pallet-quantity discount tiers. Establish a <strong>\"site coordinator\" role</strong> inside Pila that owns one development at a time. Negotiate a <strong>building-grade warranty SKU</strong> (7-10 year service with replacement guarantees, priced via Toyota Ventures' supply chain network). Wire building maintenance teams into the Pila support tier as a maintenance-grade dashboard with mesh telemetry, dispatch alerts, consolidated billing. Most operations leads would never get to the GS E&C door. The Operations Lead at Pila already has it open."
        },
        {
          "summary": "The Refurb Loop. Reverse Logistics Becomes a $400 Renter Wedge.",
          "content": "Hardware companies treat returns as a cost line. Pila's 10-year design life on LFP cells with a 5-year warranty plus renter mobility (moves every 2-3 years) plus an inevitable v2 trade-up cycle adds up to <strong>2,500 to 4,000 returns per year by 2028</strong>. Default is to scrap them at $80 disposal cost ($200K-$320K outflow). The alternative: co-locate a 4,000 sq ft refurbishment line with the contract manufacturer's North American hub. Returned units get diagnosed via mesh telemetry (data already exists), receive fresh LFP cells if needed (cells sourced through Toyota Ventures' network at $90-$110/kWh), software re-flash, and ship as <strong>\"Pila Certified\" at $400</strong>. Refurb COGS: $175. Margin per unit: <strong>$225</strong>. At 3,000 units/year that is $675K incremental margin."
        },
        {
          "summary": "The $400 Wedge. Reaching the Renter Below the Renter.",
          "content": "The $695 unit serves the renter with savings cushion and recent outage trauma. <strong>The $400 refurbished unit serves the actual mass market</strong>: the renter making a $400 decision instead of an $800 decision. The unit economics of refurb are healthier than new (no marketing spend, no first-touch support, telemetry-validated quality). A landlord buying twenty refurb units to outfit a building gets fleet pricing. A community fridge program for a public housing nonprofit suddenly fits inside a grant budget. Plus the ESG story: a product refurbished and redeployed three times before its cells retire to second-life stationary storage is the actual decarbonization narrative the climate-fund LPs at Toyota Ventures want to read in next year's portfolio update. <strong>R7 wants the IP story. Toyota wants the lifecycle story. This gives them both.</strong>"
        },
        {
          "summary": "The Operational Thesis. Cap Tables as Operating Manuals.",
          "content": "Pila's real power is sitting in the $4M raise as positioning, not as cash. <strong>Toyota Ventures is a manufacturing-discipline relationship. R7 is a long-horizon IP relationship. GS Futures is a multifamily distribution relationship. Refactor is a peer-network relationship.</strong> Most ops leads will never touch any of those. The Ops Lead who walks in already pointing at GS E&C and the Refurb Loop on day one is signaling that the role is being filled by somebody who reads cap tables as operating manuals. Permissionless infrastructure is a powerful pitch. It is also fragile if it depends on the National Electrical Code never catching up. The job is to make sure that by the time the regulatory wall comes down, Pila is not the company that sold a clever wall-outlet trick. It is the company that built a renter-grade utility from the bottom up, distributed across 44 million households, refurbished and redeployed in perpetuity, paid for in part by the buildings the renters live in."
        }
      ]
    }
  }
];

export const getPost = (slug: string) => POSTS.find((p) => p.slug === slug);
