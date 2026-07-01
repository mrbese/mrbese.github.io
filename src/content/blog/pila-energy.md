---
title: What I learned building a thesis on Pila Energy
date: 2026-05-15
readTime: 8 min
description: Three weeks across founder interviews, the tech-specs page, NEC Article 706, ERCOT and CAISO renter-grid filings, and one Hacker News thread where the founder defended the design live. All numbers from primary sources.
tags: ["research", "energy"]
featured: true
---

Full disclosure up front, because the brand here is honesty: I applied for the Operations Lead role, through Dover, and got ghosted. I wrote this anyway. The work was worth doing whether or not anyone read it.

## the permissionless insight, not the battery

The clever part of Pila is not the cell. It is a plug. By landing on a NEMA 5-15 plug with roughly 20-millisecond anti-islanding, the unit reclassifies from "energy system" to "portable appliance." That single regulatory choice sidesteps the permitting and interconnection gauntlet that keeps storage out of the exact homes that need it most. It is arbitrage, and it is legal.

## the founder, trauma turned into architecture

Cole Ashman grew up in New Orleans through Katrina, took a chemical engineering degree at Tulane in 2016, then went Tesla, then SPAN. You can read the product as a personal thesis: a unit that keeps one refrigerator alive for 32 hours, because he watched what happens when the fridge dies. Founders who lived the problem build differently.

## the hardware, and the number that actually matters

One-point-six kWh of LFP, 3,000-plus cycles, around 45 pounds. It delivers 2.4 kW continuous and surges to 7.8 kW for 500 milliseconds. The headline capacity is not the point. The surge and the cycle life are, because they decide whether the thing survives being a renter's only backup for a decade.

## the mesh is a customer-experience strategy in disguise

Pila runs a coordinator-less mesh on the 900 MHz ISM band, not WiFi. On paper it is an RF decision. In practice it means the units find each other without asking the renter to configure a network, which is the single most common way home energy hardware fails its owner. It is a support-ticket-avoidance strategy dressed as a radio spec.

## the market nobody was selling to

There are 44 million American renters sitting in the missing middle: above the $800 portable power station, below the $15,000 homeowner system, and structurally locked out of both. That is the whole thesis. Base Power is chasing the Texas homeowner. Pila is chasing the person renting the apartment next door.

> Texas needs Base. The other forty-nine states need Pila.

## the cap table, read as an operations memo

A $4 million Seed in October 2025, led by R7 Partners, with Toyota Ventures Climate Fund, Refactor Capital, and GS Futures (the venture arm that connects to GS E&C, the construction giant). Read that as a plan, not a list. Toyota is manufacturing. R7 is intellectual property. GS is distribution into buildings. Refactor is the network. The round tells you the go-to-market before the company does.

## what I would do

**Turn the GS E&C connection into pre-installed resilience.** Ship the unit as a move-in amenity in new construction and you delete customer acquisition, shipping, and the support stack in one move. Rough math says roughly $94,000 of margin recaptured in year one alone.

**Wire up the B2B motion properly.** A dedicated B2B SKU, net-30 contract templates, named site coordinators, and a building-grade warranty. Selling to a developer is not selling to a renter, and the ops tooling has to match.

**Build the refurb loop into a $400 renter wedge.** Reverse logistics will produce 2,500 to 4,000 returns a year by 2028. Turn those into a "Pila Certified" unit at $400 with roughly $225 of margin each, and you reach the renter below the renter while handing Toyota's LPs a real lifecycle and ESG story.

**Then treat the cap table as the operating manual.** Every investor is a relationship with a job. Toyota manufactures, R7 defends the IP, GS distributes, Refactor connects. An operations lead who runs the company that way is not filling a seat. They are the load-bearing wall.
