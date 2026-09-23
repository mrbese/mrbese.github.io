---
title: "What I Learned About Base Power."
date: 2026-05-01
readTime: 12 min
description: "Sixty-plus hours of primary source research across ERCOT filings, Potomac Economics, Modo Energy, IRS guidance, and Base Power's own spec pages."
tags: ["research", "energy"]
featured: true
---

> **This research led me to found [wattshed.co](https://wattshed.co).**

## What I learned about Base Power

This is the full Base Power deep dive: 60+ hours of primary source research across ERCOT filings, Potomac Economics, Modo Energy, CPUC, CAISO, IRS guidance, and Base Power’s own spec pages. All numbers from primary sources. Nothing softened.

## The Gentailer Model. Actually Executed.

Most battery companies sell you an $18,000 box and disappear. [@basepowerco](https://x.com/@basepowerco) does not. Starting $695 upfront. $19/month. They own the hardware. You get backup power and a lower electricity bill. They eat the arbitrage and virtual power plant revenue. Simple pitch. But there is a specific structural reason it works when everyone running a similar thesis has failed.

“Gentailer” means you’re the generator and the retailer simultaneously. In Texas’s deregulated ERCOT market, most REPs buy power at wholesale prices and sell at fixed rates. When prices spike, retailers bleed. Generators love those spikes. Base Power owns both sides of that trade: the battery is the generation asset, the customer relationship is the retail contract. The same price event that hits the retail book prints money in the dispatch book. That internal hedge is why the unit economics hold when they should not.

The customer pays once. Gets whole-home backup. Gets below-market energy rates. Base owns the distributed energy asset and collects grid revenue from wholesale dispatch around the clock. The subscription alone runs $228 to $348 per home per year. Grid trading sits on top of that. The customer got backup power for 95% less than a traditional install. Base got a yield-generating asset on someone else’s property, on their grid connection.

## The Cost Basis. Not the Technology.

Base does not manufacture batteries. They assemble them. CATL makes the lithium iron phosphate cells in China. Base imports those cells at roughly $55/kWh and assembles at a 90,000 sq ft facility in Austin. Off-the-shelf integrators buy finished modules at around $100/kWh. Result: Base’s 25 kWh single-unit system costs roughly $2,500 to $3,000 to build versus $6,000 to $8,000 for comparable off-the-shelf configurations.

Cell fabrication is a commodity race they cannot win and do not try to. They control stages 3 through 5: module assembly, pack integration, proprietary inverter. CATL bleeds on stages 1 and 2. Every Wright’s Law cost drop in cells flows straight to Base’s economics instead of being captured by a vendor margin.

Ford did not invent the assembly line. He borrowed the concept from Chicago slaughterhouses where master butchers were the production bottleneck. Base did the same thing. The Austin factory is not a Gigafactory. It is a very smart warehouse designed so a driveway crew can assemble the system without field improvisation. The factory exists to make the installer stupid-fast. The bottleneck was never manufacturing. It is installation crews. All design decisions follow from that constraint.

## The IRA. Working Capital Flywheel.

Section 48E ITC gives 30% back on Fair Market Value, not on COGS. COGS is roughly $3,000. Retail fair market value is roughly $10,000. The 30% credit returns approximately $3,000 per unit. The hardware effectively pays for itself before the customer writes a check.

US assembly triggers the domestic content adder, pushing the total investment tax credit toward 40%. One caveat: FEOC compliance thresholds are escalating (50% non-PFE content required in 2026, rising to 75% by 2030). With CATL cells as the primary input, that 40% is not automatic for 2026 deployments. The new factory Base is building outside Austin, targeting 4 GWh per year of production capacity, is as much about protecting this credit stack as it is about any operational scaling goal.

Section 6418 transferability closes the loop. Base can sell those credits immediately at 91 to 94 cents on the dollar. No 18-month negotiations. Deploy, generate credit, sell, redeploy. That is the working capital engine behind deployment velocity.

## The Inverter. Not a Commodity.

Base publishes 11.4 kW max continuous real power for both the single-unit 25 kWh system and the dual-unit 50 kWh system. The dual unit doubles storage capacity and dispatch duration. It does not change the inverter output. Both configurations share the same 11.4 kW ceiling.

SolarEdge and Enphase are designed for solar self-consumption. Wrong tool for this job. Base needs bidirectional, millisecond-latency, grid-forming power electronics that auto-switch in under 0.5 seconds for outage protection while running sub-second telemetry for VPP dispatch simultaneously. So they built it in-house.

Why 11.4 kW continuous matters in ERCOT: the real-time system-wide offer cap (SWCAP) sits at $2,000/MWh. The day-ahead SWCAP is $5,000/MWh. These are offer caps, not price ceilings. Actual locational marginal prices can exceed both thresholds under congestion. During those events, 11.4 kW dispatching versus a competitor’s 5 kW is the difference between full revenue capture and watching half the value disappear. The inverter is the monetization engine. Build it yourself or leave that money for someone else.

## The ERCOT Revenue Collapse. And What Survived.

Here is the part that does not make it into pitch decks. ERCOT battery storage grew from under 1 GW in 2021 to approximately 13.9 GW by early 2026. That growth cannibalized the ancillary services revenue that justified building all those batteries. ECRS clearing prices fell from $76.77/MWh in 2023 to $9.62/MWh in 2024: an 87% collapse. Total battery revenue fell 75 to 78% over the same period, from approximately $192/kW-year to roughly $43/kW-year. (Sources: Potomac Economics, Modo Energy.)

Companies that built their model on ancillary service revenue with $8,000 system COGS are finished. Base survives because their cost basis is below $3,000 and they built grid services revenue streams that do not depend on ancillary prices.

The 4CP peak billing optimization does not care what ancillary prices are doing. Texas bills transmission charges based on each customer’s share of the four highest system-demand 15-minute intervals of the year, one qualifying interval per month, during the June through September peak window. Base’s dispatch software forecasts when those intervals are likely, pre-discharges the fleet, and shaves the peaks. Billing optimization on software and fleet telemetry. Not a commodity market position.

The ADER program sets another ceiling to work within: ERCOT expanded the Aggregated Distributed Energy Resources cap to 200 MW system-wide, with a single entity allowed to control up to 50%. Hard ceiling of 100 MW per participant. At roughly 10 kW of usable dispatch per home, that is around 10,000 homes. First-mover position is real.

December 2025: ERCOT launched Real-Time Co-optimization plus Batteries. Every five minutes, the system dynamically reassigns batteries between energy and reserves. Passive standby revenue is gone. You need a real dispatch algorithm now.

## Volatility Paradox. Hoax.

The conventional narrative: more batteries suppress the price spikes that justify building batteries. This is real and supported by 2024 data. But the bull case deserves serious treatment. The ERCOT large-load interconnection queue, primarily data centers and industrial demand, nominally shows approximately 233 GW of pending new load. The generation interconnection queue is approximately 432 GW of active requests (storage, solar, gas, wind). Historically, 75–85% of generation queue projects are never built, yielding realistic net new generation of 65–110 GW.

AI data centers, EV charging, and industrial electrification could add 20–30 GW of flat, continuous baseload demand. If this materializes faster than storage grows, the reserve margin (currently above 30%) compresses back toward sub-15%, Where scarcity events become frequent again and batteries print money. But until then companies depend solely on ancillary prices need to get creative.

## The Funding. AC vs DC.

$1.3 billion total. $1 billion Series C in October 2025, led by Addition at a $4 billion valuation. Andreessen Horowitz, Lightspeed, Thrive, CapitalG, and Ribbit all participated. Over 100 MWh of distributed battery capacity deployed across DFW, Houston, and Austin in under two years. That's $200 million in April, and another $1 billion just six months later.

The Warren Buffett inside me is screaming, "Sunrun! Srun, run, run, run!" With a market cap at $20 billion in Jan 2021, they got destroyed. After hitting rock bottom at $1.5 billion in April 2025, they are making a comeback today at $4.5 billion, trading at 1.72x sales and pivoting hard to Battery-First, "home-to-grid" VPPs. Meanwhile, the market believes Base has verticalized deep enough to survive a revenue compression that is washing out everyone else. And there is something in Base's "sacret lunch" that Sunrun simply cannot replicate with their 9,751 employees (Sept 2025).

One thing is for sure: Volatility is the middle name of this game. It seems like anything that touches electricity eventually copies its sine wave. Here's hoping Base's valuation adopts DC.

## What I Would Do Next.

1. The Thermal Battery: Liberating an extra 2 kW of export capacity to the grid by doubling down into vertical integration by adding energy efficiency upgrades to the stack.
2. California. The Financial Arbitrage: Using California's stable RA contracts to secure investment-grade debt to fund Texas growth.

The ERCOT revenue collapse is well-documented. We’ve seen an 87% drop in ancillary service clearing prices and a 75–78% drop in total battery revenue per kW. Companies carrying $8,000 system COGS are done. Base Power is not, because they verticalized hard and early. But verticalization is a direction, not a destination. Here is what I would do next. I'm bringing actual numbers, because strategic frameworks without specifics are just opinions.

## FIRST ACTION

## The Thermal Battery. Doubling Down on Verticalization via Energy Efficiency

There is a framing problem costing Base money every day they do not address it. The battery is competing with the home for power. Whether a customer buys the single-unit (25 kWh) or the dual-unit (50 kWh), both systems are capped at the exact same 11.4 kW continuous output. The dual unit gives you twice the storage duration, but it doesn't give Base more dispatch power. So for every customer, actual export capacity during a grid event equals:

**EXPORT CAPACITY = 11.4 kW - HOUSE LOAD**

A standard, inefficient Texas home draws 5–6 kW on a summer afternoon. That leaves the inverter exporting barely half its rated output. Base installed an 11.4 kW asset but captures only ~5 kW during the exact scarcity events that pay the highest rates. The building envelope is cannibalizing grid services revenue.

## The Physics, Quantified

An Austin attic hits 140°F in August. The AC compressor runs continuously. Here is what happens when you address the building envelope:

- Upgrade attic insulation (R-49): 1.0–1.5 kW peak load reduction.
- Aerosol duct sealing (<4% leakage): Recovers 15–20% of lost conditioned air.
- ECM blower motor swap: 200–300W continuous draw reduction.

By liberating an extra 2 kW per home through these passive upgrades, Base yields 33% to 40% more export capacity from the exact same hardware. The inverter didn't change. The cells didn't change.

Under ERCOT's new RTC+B market rules, and assuming just 20 hours of extreme scarcity a year, optimizing the split between $2,000/MWh Real-Time dispatch and $5,000/MWh Day-Ahead reserves across a 30,000-home fleet translates to $2.4M to $6.0M in additional annual revenue.

## The Moat. Decoupled Installation.

Base Power already treats home installation like a decoupled assembly line. Because they own the manufacturing and prep everything in advance, their install schedule is broken into specialized nodes; An advance material drop-off, an electrical crew for a 1-3 hour power disconnect, and a separate cleanup crew.

Here is exactly how the efficiency upgrades slot perfectly into this existing schedule with zero friction:

- Phase 1: Material Drop-off. The blown-in cellulose and duct sealing materials arrive on the advance pallet alongside the battery hardware.
- Phase 2: Parallel Workflow. While the core electrical crew is outside managing the 1-3 hour panel reconfiguration and power disconnect, an unlicensed insulation crew is inside the attic blowing in cellulose. They can also prep the HVAC unit for the motor swap so everything is staged and ready for the licensed technician to execute a fast swap. Two parallel workflows, zero interference.
- Phase 3: Clean up. The next day, the standard Base cleanup crew returns to sweep the site and collect any leftover boxes and equipment.

By piggybacking on their existing decoupled schedule, Base achieves zero additional customer acquisition cost and zero extra truck rolls. This structural advantage saves $650 to $1,100 per home compared to traditional efficiency contractors. At 40 installs/day with a 30% upsell rate, that route efficiency alone generates a $2M–$3M annual operational advantage, before a single VPP revenue dollar hits the books.

## SECOND ACTION

## California. The Financial Arbitrage.

Texas is an energy-only market. Lenders price that merchant risk: SOFR + 350-450 bps, 50% LTV, 2.0x DSCR. For every $12,000 deployed in Texas, Base can borrow roughly $6,000.

California’s Resource Adequacy (RA) framework is different. RA contracts pay fixed dollars per kW-month, regardless of dispatch. Lenders treat these like infrastructure contracts: SOFR + 175-250 bps, up to 75-80% LTV, 1.2x DSCR. For every $16,000 deployed in CA, Base can borrow $12,000–$13,000.

Same cells. Same inverter. Different contract. That contracted California revenue cross-collateralizes the Texas fleet. On a blended $100M portfolio (60% TX, 40% CA), this saves $900k to $1.5M annually in interest expense.

San Diego. Market Entry.

- Rates: SDG&E residential rates average $0.39–$0.40/kWh (2.5x the national average). A $40–$60/mo subscription is commercially supportable, double the Texas rate for the same hardware.
- The NEM 3.0 Void: Solar export credits cratered. Customers were left behind with panels on their roofs and no economic answer for excess generation. This is exactly who Base walks into. Base's $695 upfront fee vs. a $15,000+ Tesla Powerwall is a mismatch.
- B2B2C Entry: Base enters as a DER aggregator through CCA partnerships (like San Diego Community Power), bringing the fleet and the RA capacity that CCAs desperately need.

## The Capital Flywheel

Doubling down on energy efficiency squeezes the last drop of juice from the battery they already deployed, maximizing profits from the wild Texas volatility. Meanwhile, diversifying into California’s RA market secures the investment-grade debt needed to fund that Texas expansion. These are not two separate markets running in parallel. It is a united capital structure.

California offers the steady, predictable 'Direct Current' of regulated returns, shielding [Base Power Company](https://www.linkedin.com/company/basepowercompany/) from the troughs of Texas's wild 'Alternating Current' while letting them bank the crests.

Omer Bese
