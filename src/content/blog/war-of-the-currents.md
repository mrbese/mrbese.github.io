---
title: What I learned building a thesis on the second war of the currents
date: 2026-07-06
readTime: 16 min
description: The villain of the war of the currents was right. Inside Class 4 power, 48V AI racks, and the HVDC loophole that keeps Texas out of federal reach.
tags: ["research", "energy"]
featured: true
---

In the Base Power piece I used AC versus DC as shorthand for capital. Alternating current was Texas volatility, direct current was the regulated return. A metaphor borrowed from a war that supposedly ended in the 1890s. Then I pulled the literal thread, through NEC Article 726, the UL 1400 standards, Panduit's technical briefs, Purdue's nanogrid retrofit, and Honda's microgrid deployments. The literal version turned out to be the better story. The war did not end. It paused for 130 years while the losing side waited for a missing component. What came back is a plot twist nobody in 1893 would have accepted: the villain was right, and the hero's name is now stamped on the machine undoing everything he built.

## the transformer won, not the current

Edison lost the War of the Currents to one piece of hardware. In the 1890s the magnetic transformer could step AC voltage up for long-distance transmission and back down for the home, and nothing on Earth could do that for DC. That is the entire victory. Not safety, not physics, not elegance. A component gap. Westinghouse had a transformer and Edison did not, so the world standardized on a waveform and then spent a century mistaking a supply-chain limitation for a law of nature.

The component gap closed decades ago. Solid-state power electronics step DC voltage as casually as transformers ever stepped AC. What never closed is the installed base, and installed bases do not lose arguments. They lose customers.

Here is the part that should bother you. Edison was the villain of this story and everyone knows it. His lab electrocuted dogs and horses in front of reporters to brand alternating current a killer. He lobbied to build the first electric chair around his rival's current so the state would execute a man with it, then pushed "Westinghoused" as the verb for what the chair did. He fought filthy, and he lost, and on a 130-year delay he was right. Not morally. Technically. The future he wanted, local generation feeding native-DC devices, is the future booting up right now. The man who ran the ugliest smear campaign in the history of electricity is the one the physics vindicated.

Nikola Tesla got the exact opposite deal, which is worse. He designed the AC system that won, tore up his own royalty contract to keep Westinghouse solvent, and died broke in a hotel room feeding pigeons. He gave away the fortune and kept only the credit, and now even the credit is turning on him. Every rooftop panel, every battery wall, every EV is a DC machine quietly repealing his victory one appliance at a time. The saint lost slowly. The villain won late. History does not usually settle its scores this cruelly, and it is not done yet.

## everything you own is DC. the grid refuses to notice.

Look at where the electrons actually start and end. Solar panels generate DC. Batteries store DC. LEDs, laptops, phones, EVs, and the variable-speed compressor in a modern heat pump all consume DC. The only thing in the chain that speaks AC is the wire in the middle, and every handoff across that wire is taxed. Typical AC-to-DC conversion cycles burn 5 to 30 percent of the energy as heat. Every wall wart in your house is a small space heater that charges a phone as a side effect.

Data centers pay the tax twice. Every watt lost to conversion becomes heat, and every watt of heat has to be removed by cooling that itself consumes power. Jonathan Ore, one of the lead researchers at Purdue, describes the centralized grid as a "marble-balancing game." I would go further. We built square-peg devices for a hundred years and then congratulated ourselves on the quality of our round holes.

## Class 4 is a labor arbitrage disguised as a safety standard

In 2023 the National Electrical Code added Article 726, the first new power class in 45 years. The press coverage says safety. The spreadsheet says something else.

The old regime was a binary. Class 1 gives you real power, 600 volts and no cap, and charges you a licensed electrician and rigid conduit for every foot of it. Class 2 gives you the cheap install, a low-voltage technician and no conduit, and caps you at 100 watts. For a century, the moment your load crossed a doorbell's appetite, the expensive labor walked in.

Class 4, the Fault Managed Power System, breaks the binary. Up to 450 volts DC, delivered over 16 to 18 AWG wire, roughly lamp cord, installed by low-voltage technicians with no conduit. Panduit's numbers: 520 watts over 500 meters, 250 watts over 2,000 meters, about 30 times the power-and-distance envelope of Class 2, and a 60 percent reduction in cable costs before you count the labor.

I wrote in the Base Power thesis that the real constraint in residential energy is not the cell price, it is the install crew. Same lesson here at the scale of the entire electrical code. The headline says fault management. The budget line that vanished says licensed electrician and conduit.

## electricity that asks permission every three milliseconds

The mechanism that makes 450 volts legal on lamp cord is a stopwatch. A Class 4 transmitter does not send a continuous stream, it sends power in supervised bursts and listens between them. Panduit's implementation runs a 3-millisecond cycle: 2 milliseconds on, 1 millisecond off, and during the off window it interrogates the circuit. (VoltServer's Digital Electricity packetizes differently, same idea, different waveform.) If it detects any of the five fire-hazard faults or three shock-hazard faults defined in UL 1400-1, it kills power within 2 milliseconds, faster than your nervous system can register contact.

The detail that sold me is line-to-line detection. A standard GFCI outlet only watches for current leaking to ground. Touch both conductors of a live circuit and the GFCI reads you as a legitimate load. To a GFCI, a human across both lines is indistinguishable from a microwave. A Class 4 transmitter reads the impedance signature, decides you are not a microwave, and disconnects. The result is a genuine paradox: a 450-volt Class 4 line is safer than the 120-volt outlet behind your couch.

> AC won the first war with a transformer. DC is winning the rematch with a stopwatch.

## DC arcs do not apologize

There is a reason high-voltage DC was banned from buildings in the first place, and it is worth respecting. AC voltage crosses zero 120 times a second on a 60 Hz grid, and every crossing is an offer for an electrical arc to die quietly. DC never crosses zero. A DC arc is a self-sustaining plasma channel that melts copper busbars and keeps burning until the gap widens or something intelligent cuts the source. For utilities this is spelled wildfire liability.

The old protection stack cannot handle it. Mechanical breakers need 20 to 100 milliseconds of physical inertia to open, an eternity against plasma. The new stack is solid state: silicon carbide and gallium nitride switches that interrupt in under 10 microseconds. Safety migrated from hardware that reacts to silicon that predicts. That migration, not any love of Edison, is what made the DC building legal.

## the data center is paying for the whole transition

Nobody rewires civilization out of principle. Somebody has to hit a wall first, and AI hit it. The old 12-volt and 48-volt rack architectures were engineered for roughly 10 to 15 kW per rack, and an AI rack blows past that, so 12-volt distribution stops making sense fast. The fix is arithmetic you can do on a napkin. Quadruple the voltage from 12 to 48 and you quarter the current, and since resistive loss scales with the square of current, distribution losses drop about sixteenfold. The current falls to a quarter, so the copper does too, which in a rack means the cable stops blocking the airflow that cools the GPUs.

The Open Compute Project standardized the shift as ORv3. Amphenol builds the connectors with ultrasonic welds and 0.05 milliohm end-of-life contact resistance. Vicor steps high-voltage DC down at the point of load. None of this was built for your house. All of it will end up there, because the data center is the volume market that rides the cost curve down for everyone else. Wright's Law does not care what the component was originally for.

## the living laboratories

The proof exists and it is refreshingly unglamorous. Purdue retrofitted a 1920s house to run on a 380-volt DC backbone, with a patented load center built from scratch because you cannot buy a DC breaker at a hardware store. The control logic is modeled on neural connections, which sounds like marketing until you realize the point: the house negotiates power between solar, batteries, and the utility without a human in the loop, and detaches from the grid entirely when the grid fails.

Honda runs the commercial-scale version in Chino, California: the largest commercial DC microgrid in North America, a 300 kW system paired with a 1.0 MW solar array and a 546 kWh battery, feeding LED lighting, ventilation fans, and forklift charging with 100 percent of the solar consumed on site. Up the road in Torrance, a cloud EMS matches 60 EV chargers to real-time solar output. Note what these loads are. Forklifts and warehouse lighting are not a demo. They are a Tuesday.

## the cap table of the transition

The competitive structure is where this gets interesting for anyone who reads companies for a living.

VoltServer patented Packet Energy Transfer, then helped write Article 726 itself and co-founded the Fault Managed Power Alliance alongside Belden, Cisco, Panduit, and Prysmian. Getting your patent's logic embedded in the national electrical code is regulatory arbitrage's final form: not exploiting the rules, authoring them. One layer down is the raw material. Wolfspeed built maybe a third of the world's silicon carbide substrate, then filed Chapter 11 in June 2025 and emerged that September having shed 70 percent of its debt. The gatekeeper of the transition's key material almost did not survive to see it, which is a fair warning about how early this all still is.

And the incumbents are doing what incumbents with balance sheets do. The big switchgear houses, ABB, Siemens, Schneider, Eaton, still control most of the global DC breaker market between them, and they are buying instead of building. Eaton took an equity stake in VoltServer this July and separately bought Resilient Power Systems, a solid-state transformer maker, last August. ABB bought GE Industrial Solutions for 2.6 billion dollars, then took a controlling stake in BrightLoop, a French DC-DC converter shop. The titans do not need to out-invent the startups. They own the cabinets everything has to ship inside. And the sharpest position at the edge belongs to the company wearing the loser's name. Tesla, named for the man who bet his life on alternating current, is a pure DC empire: batteries, EVs, Megapacks, solar, and a virtual power plant that orchestrates all of it, positioned to become the default operating system of the grid edge. Nikola Tesla spent his life proving AC could power a planet. The trillion-dollar brand carrying his name is out proving it does not have to.

## edison's revenge is a battery

Here is where the irony stops being cute and turns surgical. Edison had two big bets. Everyone remembers the first, direct current, and how he lost it. Almost nobody remembers the second. For most of a decade after 1901 he poured himself into the nickel-iron battery, betting on iron because it was cheap, abundant, nearly indestructible, and would not catch fire the way other chemistries did. A cheap iron battery for a DC world. He was early by a century on that one too.

Now open a Tesla Powerwall 3. The cells inside are LFP, lithium iron phosphate. Tesla walked away from the cobalt and nickel that defined the first two Powerwall generations and moved to a cathode built on iron and phosphate, because iron is cheap, abundant, absurdly durable, and does not burn. The chemistries are not related, an alkaline nickel-iron cell and a lithium iron phosphate cell are different animals, but the bet underneath them is word-for-word identical: iron, for the exact reasons Edison wrote down in 1901. And the Powerwall 3 folds the inverter inside its own case and takes solar DC straight into the battery, killing the conversion step the older AC-coupled units needed. Native DC storage, iron chemistry, bolted to the wall of a solar home.

Add it up. Elon Musk's energy division moves power as direct current and stores it in a cheap iron battery that will not burn. That is Edison's entire life's work, both bets, finally shipping at scale, under the brand name of the man Edison spent that life fighting. Somebody should tell Elon the battery unit is misfiled. It is not a Tesla. It is an Edison with better marketing and a working supply chain, and the name is even available, because its original owner has not needed it since 1931.

## what is still broken

An honest thesis lists what would kill it.

The topology fight is unsettled. Bipolar 380-volt networks promise dual voltage levels but suffer neutral-line imbalances that can overvolt and quietly destroy the very appliances DC was supposed to protect. Power quality has to be redefined from scratch: no harmonics to chase anymore, but voltage ripple instead, driven mostly by aging electrolytic capacitors. The failure mode of the DC house is a two-dollar capacitor drying out.

Solid-state breakers carry a nastier version of the same problem. The varistor that absorbs fault transients degrades with every event, creating what IEC 61508 calls a loss of safety function: a breaker that looks alive and is not. And the data vacuum is real. AC transformers have fifty years of reliability records. FMPS transmitters have three. Texas Instruments claims a DC microgrid is up to 200 percent more reliable than the AC equivalent, which may well be true, but it is an industrial-microgrid figure whose citation trail goes cold two hops down, and that is the polite way of saying nobody has fifty years of FMPS field data yet. Price the contingency accordingly.

## the leapfrog nobody is pricing

The most underrated market is the one with no incumbent to fight. Developing economies skipped copper landlines and went straight to mobile. The same move is available against the AC grid. Class 4 delivers 250 watts over two kilometers of thin wire, installed by local technicians instead of scarce licensed engineers, feeding native DC appliances that skip the inverter and its conversion losses entirely. A DC-LED fixture already draws around 75 percent less than the incandescent bulb it replaces, and dropping the inverter on top of that shrinks the solar array and battery a village has to buy in the first place. PAYGo financing turns the capex into opex on a mobile-money cadence. Every structural advantage of DC compounds hardest exactly where the grid never arrived.

## new york gets the headlines, texas gets the loophole

Everything above is DC inside a building. Go up a layer, to the wires between whole grids, and the same physics writes a stranger story.

New York has the photogenic version. In May 2026 the Champlain Hudson Power Express switched on: 1,250 megawatts of Quebec hydropower carried as buried DC cable 339 miles down the Hudson into a converter station in Queens, enough to cover roughly a fifth of New York City on a hot afternoon and push the oil-burning peakers off the margin. Clean power in, dirty plants out, and it earned every press release it got. But notice what it is not. New York sits inside the Eastern Interconnection, under federal authority no matter what it builds. For New York, DC is just the best cable for a long wet tunnel. It changes nothing about who governs the grid.

Texas is where DC does something alternating current structurally cannot, and it has nothing to do with efficiency. ERCOT is an electrical island on purpose. The Federal Power Act gives Washington authority over electricity moving "in interstate commerce," and the courts tie that to whether your grid is synchronously wired across a state line. So Texas never wires synchronously across the line. In 1976 one utility threw a synchronous switch to Oklahoma, the "Midnight Connection," and the rest of the Texas grid ripped its own ties out within days in a panic; the state regulator ordered the switch cut a few months later. That is how allergic Texas is to a synchronous handshake.

A DC tie is the way around the trap. An HVDC converter turns Texas AC into DC and back to AC on the far side, so two grids trade power without ever locking frequency. Asynchronous means not synchronous, which, per a 2014 FERC ruling on exactly this question, means not interstate commerce, which means Texas keeps FERC off its grid while still importing a few gigawatts. Every tie ERCOT has to the outside is asynchronous by design, almost all of it DC. The big new lines are DC too: Pattern's Southern Spirit, 3,000 megawatts of plus-or-minus 525 kV reaching toward Mississippi, and Grid United's Pecos West feeling for the Western grid. A DC tie is regulatory arbitrage rendered in copper and silicon. It is the only bridge Texas will build, because it is the only bridge that does not also carry Washington across it.

The honest part: the loophole is a choice wearing the costume of a physical law. Texas could build an AC tie tomorrow and refuses, because refusing is what keeps FERC out, and even the DC shield is not airtight. FERC warned in 2018 that enough commingled flow through the Mexico ties could pull ERCOT under its authority anyway. After Winter Storm Uri froze the island in 2021 and killed hundreds, FERC's chair asked whether keeping FERC at bay was worth losing the power to import electricity when your own is dead on the ground. Texas heard the question and kept the island. In the Base Power piece I called Texas the alternating current, the volatility that prints on scarcity. The state that is all AC in that metaphor can only touch the rest of the country through DC.

## what I would do

**Bet on the receiver, not the transmitter.** The transmitter war has an incumbent structure already forming around VoltServer's protocol and Eaton's checkbook. The open flank is the endpoint: the load centers, sockets, and appliance interfaces of the DC building. Watch where the appliance makers put their motors. LG pulled brushless-DC motor design in-house and has shipped over 100 million of them, while Whirlpool went the other way and sold its compressor arm to Nidec. The OEMs disagree on whether the motor is the moat, and that disagreement is the opportunity.

**Own the ripple.** Someone will build the boring business of monitoring capacitor aging and varistor degradation across DC infrastructure, condition monitoring sold as recurring revenue. Unsexy, mandatory, and sticky. That is the actual moat in a market with three years of reliability data.

**Build the labor pipeline.** The entire Class 4 economic case clears through low-voltage technicians who do not exist yet at scale. Certification and training for FMPS installation is a picks-and-shovels position on the whole transition. The install crew was the constraint at Base Power. It is the constraint here too.

**Read the code cycle like a filing season.** The 2026 NEC retires the term "low voltage" in favor of "limited energy," which reads like housekeeping and is actually the code conceding that safety now comes from managed energy, not from small numbers. But it still keeps 450-volt Class 4 out of dwelling units, which means Purdue's DC house is a laboratory your own home is not yet allowed to become. Codes are the go-to-market. The company standing there the day the dwelling rule flips will be selling while everyone else is reading the errata.

**Own the doorway, not the power.** ERCOT is a market of 26 million people with only a handful of legal entrances, and each new interstate line, Southern Spirit, Pecos West, is a privately owned converter station sitting on the one asynchronous border in the country. Those developers are not selling electrons. They are selling the only door into Texas that does not let FERC in behind the power. Toll roads are the oldest good business there is.

Edison lost because the 1890s could not step DC voltage. That gap closed years ago, and the current he was ridiculed for now rewires the world, from a building code chasing its own laboratories to a state that stays sovereign by refusing to synchronize. Somewhere the cruelest man in the story is getting the last laugh. And every time a Tesla Powerwall clicks over to backup, it runs Edison's current out of Edison's iron, a monument that insults the man it is named for. The war of the currents was never won. It was postponed, long enough to make the winner the loser and the loser right.
