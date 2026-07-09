---
title: "Current War II: Tesla vs Edison"
date: 2026-07-08
readTime: 13 min
description: A three-part series. Edison lost the war of the currents to a component gap. 130 years later the physics, the building code, and Texas all flipped his way.
tags: ["research", "energy"]
featured: true
---

## part 1: elon should rename tesla to edison

*Don't worry, it's not clickbait. But before coming to that part, let's take a look at a 130-year-old hiatus.*

The War of the Currents did not end in the 1890s. It simply paused while the losing side waited for a missing component. I pulled the literal thread of this architecture through NEC Article 726, the UL 1400 standards, Panduit's technical briefs, Purdue's nanogrid retrofit, and Honda's microgrid deployments. The literal reality turned out to be far more compelling than any historical shorthand. What came back is a plot twist nobody in 1893 would have accepted: the villain was right, and the hero's name is now stamped on the machine undoing everything he built.

### the transformer gap

Edison lost the first current war to one piece of hardware. In the 1890s, the grid's existential problem was distance. Power plants generated low voltage, but moving power across hundreds of miles required high voltage to minimize line I²R losses. That electricity then had to be stepped back down to safe levels before entering a home.

George Westinghouse had the magnetic transformer, a passive block of iron and copper wire that could step AC voltage up and down with near-perfect reliability. Edison had nothing on Earth that could do that for direct current at scale. His alternatives were cumbersome, mechanically moving motor-generator pairs that were an operational nightmare.

That single component gap is the entire reason the world standardized on an alternating waveform. It wasn't safety, physics, or elegance. It was a late-nineteenth-century supply-chain limitation that we spent a century mistaking for a law of nature.

The component gap closed decades ago. Solid-state power electronics step and manipulate DC voltage as casually as transformers ever handled AC. But installed bases do not lose logical arguments; they lose customers. For a century, the sheer momentum of the existing AC grid forced us to view a native-DC world through an AC lens.

### the round holes of an AC grid

This is the part that should feel uncomfortable. Edison was an unmitigated monster in this story. His lab publicly electrocuted dogs, calves, and horses in front of reporters to brand alternating current a killer. He colluded to build the first electric chair around his rival's current so the state would execute a man with it, then pushed "Westinghoused" as the verb for what the chair did. He fought filthy, he deployed weaponized misinformation, and he lost.

Yet on a 130-year delay, the raw physics have vindicated his topology.

Look at what you actually own. Solar panels generate DC. Batteries store DC. LEDs, laptops, phones, electric vehicles, and the variable-speed compressors in a modern heat pump all consume DC. The only thing in the chain that speaks AC is the wire in the middle, and every single handoff across that wire is taxed.

Typical AC-to-DC conversion cycles burn 5 to 30 percent of their throughput straight into the room as heat. Every brick transformer and wall wart plugged into your baseboard is a small space heater that charges a phone as a side effect. We built square-peg devices for a hundred years and then congratulated ourselves on the quality of our round holes.

### the great branding inversion

The paradox gets weirder when you look at the equity markets. Institutional forecasts now predict Tesla's energy ecosystem will generate more profit than its car division by the end of 2027. At that point, energy stops being a speculative side project and becomes the absolute core of the company.

The cars will still exist, but they will run on AC motors inside a business matrix whose real money is made moving, storing, and pricing power as direct current. The architecture Edison fought for in 1893 is quietly becoming the core financial engine of the machine carrying Tesla's name. By the end, when Gen Alpha grows up, the branding simply will have become an ironic joke.

### edison's revenge is built of iron

The irony stops being an abstract historical footnote and turns mechanical inside the home storage market. Edison placed two massive, dogmatic bets in his life: direct current, and the nickel-iron battery. He poured millions into iron chemistry after 1901 because iron was cheap, abundant, structurally indestructible, and immune to the thermal runaway fires that plagued alternative chemistries. He wanted a cheap, immortal iron battery for a direct-current world. He was simply a century too early on the manufacturing logistics.

Now open a modern residential storage unit like the Tesla Powerwall 3. The cells inside are LFP, lithium iron phosphate. The residential storage market has walked away from the volatile nickel-and-cobalt formulations of early consumer electronics and moved to a cathode built entirely on iron and phosphate. While the specific chemistry differs from Edison's nickel-iron cells, the core reasons match the notes he scribbled in 1901: iron is cheap, structurally durable, and it does not burn.

The newest generations of these units also pack the inverter directly inside the chassis. They accept native-DC solar inputs straight into a native-DC battery bank, completely removing the multi-stage conversion tax at the household edge. Elon Musk's energy ecosystem moves power as direct current and holds it in rugged iron chemistry.

Add it up. The entire residential energy transition is executing the central strategic bet Edison made on iron-based storage for a DC world, now shipping at global scale under the corporate brand of the man he spent his life fighting. Nikola Tesla spent his life proving AC could power a planet. The trillion-dollar brand carrying his name is out proving it doesn't have to. Somewhere, the most ruthless man in early American technology is getting the last laugh.

## part 2: the stopwatch that made 450V legal

If you want to know where the regulatory undercurrents are shifting, you do not read corporate mission statements. You read the building codes.

In 2023, the National Electrical Code introduced Article 726 and codified Class 4 power. It was the first entirely new power classification added in 45 years. The trade press called it an elegant safety evolution. The operational spreadsheets show something else entirely: a massive labor-arbitrage play dressed up as a fire standard.

### bypassing the conduit

Under the old code, you faced a rigid binary. Class 1 lines carried real industrial power up to 600 volts. The moment your project needed that kind of juice, the code forced you to pay a licensed electrician to bend rigid steel conduit and pull heavy copper through every foot of the building structure.

Class 2 was the cheap, low-voltage domain. It capped circuits at 100 watts and 60 volts. You got thin wire, no metal conduit, and installation by low-voltage IT technicians. For a hundred years, the moment a device's appetite crossed a common doorbell, the expensive labor and structural steel walked through the door.

Class 4, or Fault-Managed Power Systems (FMPS), deliberately shatters that binary. It allows up to 450 volts DC to travel over thin, unshielded 16-to-18 AWG copper wire (think lamp cord) installed by low-voltage technicians with zero metal conduit.

According to Panduit's design briefs, this architecture can push 520 watts over 500 meters or 250 watts up to two kilometers. That is roughly thirty times the power-and-distance envelope of a Class 2 circuit, with a 60 percent reduction in raw cable cost before labor even enters the picture.

The primary constraint in residential and commercial energy infrastructure right now is not the price of cells. It is the physical throughput of the installation crew. Class 4 removes both the licensed electrician and the conduit runner from the budget at the same time.

### electricity that asks permission every three milliseconds

The engineering trick that makes 450 volts legal on bare lamp cord is an industrial stopwatch. A Class 4 transmitter does not send a smooth, continuous river of electrons. It packetizes power into supervised bursts and listens hard during the gaps.

Panduit's implementation runs on a strict 3-millisecond cycle: the line stays live for 2 milliseconds, then cuts out completely for 1 millisecond. During that tiny silent window, the transmitter interrogates the circuit. If it detects any of the five fire-hazard faults or three human-shock faults defined under UL 1400-1, it terminates power within 2 milliseconds. That is faster than the human nervous system can register physical contact with a live wire.

The real breakthrough is line-to-line human detection. A traditional GFCI only watches for current leaking to ground. Touch both hot and neutral at once, and the GFCI sees your body as a perfectly normal load. To an ordinary outlet, a human being bridging the lines is indistinguishable from a running microwave.

A Class 4 transmitter reads the dynamic impedance signature, decides you are not a kitchen appliance, and disconnects. The result is a genuine paradox: a 450-volt Class 4 line is fundamentally safer than the 120-volt AC outlet hidden behind your living-room couch.

> AC won the first industrial current war with an electromagnetic transformer. DC is winning the rematch with a silicon stopwatch.

### the data center moat

Civilization does not rewire its core architecture out of principle. Someone has to hit an operational wall first. AI data centers hit it at full speed.

Traditional 12-volt and 48-volt rack architectures were built for low-density compute drawing 10 to 15 kilowatts per rack. Modern AI clusters hosting high-density accelerators blow past those limits instantly. At those densities, low-voltage DC distribution demands copper busbars so thick they physically choke the airflow needed to cool the processors.

The fix is simple arithmetic. Shifting high-density infrastructure to native DC architectures under specifications like the Open Compute Project's ORv3 reclaims spatial yield. Quadruple the internal rack voltage from 12 V to 48 V and you quarter the current. Because resistive line losses scale with the square of the current (I²R), distribution losses across the rack drop by a factor of sixteen. The required copper footprint shrinks dramatically, the cables stop blocking the airflow, and suddenly there is physical room to cool the GPUs.

Companies are engineering specialized connectors with ultrasonic welds that drive end-of-life contact resistance down to 0.05 milliohms. High-density buck-boost regulators step high-voltage DC down right at the point of load on the silicon. None of this infrastructure was originally built for homes. It will reach them anyway. The hyperscale data center acts as the high-volume engine that rides the cost curve down for everyone else.

### what breaks: the alpha hidden in the ripple

An honest thesis must name its own failure modes. The move to in-building DC brings liabilities the legacy AC grid never faced.

A DC arc is uniquely dangerous. Alternating current crosses zero 120 times a second on a 60 Hz grid and naturally extinguishes an arc at the next zero crossing. Direct current never crosses zero. A high-voltage DC arc becomes a self-sustaining plasma channel that will melt copper busbars and keep burning until the physical gap widens completely or intelligent silicon intervenes. For utilities, that spells catastrophic wildfire liability.

Old mechanical breakers cannot save us. A spring-loaded mechanical breaker needs 20 to 100 milliseconds of physical inertia to open. Against a developing plasma arc, that is an eternity. The new protection stack must be entirely solid-state, using silicon-carbide (SiC) and gallium-nitride (GaN) field-effect transistors that interrupt faults in under 10 microseconds. Safety has moved from rugged hardware that reacts to predictive silicon.

This shift creates an entirely new, unsexy failure mode. A solid-state breaker can degrade silently with every surge event. It can look perfectly operational on a digital dashboard while it is physically dead inside, what IEC 61508 calls a "loss of safety function."

The electrical infrastructure becomes exposed to voltage ripple driven by the gradual drying out of aging electrolytic capacitors and transient-absorbing varistors.

Electromagnetic transformers carry more than a century of field data. Fault-managed FMPS transmitters have roughly three years of commercial history. Corporate claims of 200 percent reliability gains over AC equivalents often trace back to thin, circular citation chains. The real entrepreneurial alpha is not in building another transmitter. It is in the boring, recurring work of monitoring capacitor aging and varistor health across DC infrastructure.

## part 3: texas can have their cake and eat it too

At the scale of entire grids, direct current stops being mainly about efficiency. It becomes a tool for keeping federal regulators on the other side of the state line.

### new york got the headlines

In May 2026, the Champlain Hudson Power Express turned on: 1,250 megawatts of Canadian hydropower delivered straight into Queens through a buried DC cable. Clean power in, old oil-burning peaker plants out. It earned every celebratory press release it got.

But New York sits deeply inside the Eastern Interconnection. The Federal Energy Regulatory Commission (FERC) still runs the show no matter what technical asset they bury under the riverbed. For New York, High-Voltage Direct Current (HVDC) was simply the best technical solution for a long wet tunnel. It changed nothing about who actually governs the market.

Texas did something entirely different.

### the airwall on the sabine river

The Electric Reliability Council of Texas (ERCOT) is a deliberate electrical island. The Federal Power Act of 1935 gave Washington sweeping authority over electricity moving in "interstate commerce". For a century, the courts have consistently tied that definition to whether a state's transmission lines are synchronously locked with an out-of-state grid. If your wires alternate in an unbroken 60 Hz lockstep across a state boundary, you fall under federal rules.

Texas has been pathologically allergic to that synchronous handshake for nearly a hundred years. The lengths it will go to preserve its isolation became obvious in May 1976 during the infamous "Midnight Connection" incident. A utility executive flipped a switch linking a Texas power plant to an Oklahoma cooperative. Grid operators panicked. Fearing that single line would trigger total federal jurisdiction, they ripped every interstate tie out within days. The state regulator later ordered the physical line cut. They would literally rather risk blackouts than let Washington claim jurisdiction over their electrons.

This is where high-voltage direct current functions as a political shield rather than an efficiency tool. An HVDC converter takes out-of-state alternating current, flattens it to direct current, sends it across the state line as a non-alternating stream of electrons, and reconstructs an AC waveform on the receiving side. Because the DC segment never alternates, the two grids can trade massive blocks of power without ever locking frequencies. They remain fundamentally asynchronous.

A definitive FERC ruling confirmed that an asynchronous connection does not constitute interstate commerce. Direct current acts as an electrical firewall. It allows Texas to have its cake and eat it too: importing gigawatts of power from the outside world when its own grid faces a crunch, while keeping federal regulators entirely off Texas soil.

Every major new tie ERCOT is building follows this exact loophole. Pattern Energy's Southern Spirit line targets 3,000 megawatts of ±525 kV DC toward the Mississippi border. Grid United's Pecos West line reaches out toward the Western Interconnection. These developers aren't just selling commodity electrons. They are developing privately owned converter stations sitting on the only asynchronous borders in America. They are toll roads operating on the only legal doors into Texas that refuse to let Washington pass behind them.

### the choice of the island

The regulatory shield is a political choice wearing the costume of a physical law. Texas could build a conventional high-capacity AC interconnection to the Eastern grid tomorrow and end its isolation. It refuses because the state's political economy values absolute jurisdictional sovereignty over structural backup.

Even the DC shield has faced stress. FERC warned that enough commingled power flowing through ties to Mexico could theoretically pull ERCOT under federal jurisdiction in edge cases. After Winter Storm Uri froze the grid and left hundreds dead, federal regulators asked explicitly whether maintaining the airwall was worth losing the ability to import emergency power when local infrastructure failed. Texas heard the question, weighed the cost, and chose to keep the island. The state that runs on pure alternating volatility in its capital markets uses direct current as its sovereign airwall.

### the macro leapfrog

The ultimate destination for this technology is not the entrenched Western markets. It is the economies that have no legacy grid to protect.

Developing countries famously bypassed copper landlines and went straight to cellular networks at the village edge. The same structural leapfrog is now available against the traditional AC grid.

Class 4 power can deliver 250 watts over two kilometers of cheap, unshielded wire installed rapidly by local technicians instead of scarce electrical engineers. Connecting those lines directly to native-DC appliances removes the inverter stage and its conversion losses entirely.

A modern DC-powered LED already uses roughly 75 percent less energy than the incandescent it replaces. Removing the local inverter on top of that efficiency gain shrinks the required solar array and battery bank dramatically. Pay-as-you-go (PAYGo) micro-financing then turns the reduced upfront capital into an operational expense managed over mobile money. The compounding advantages of direct current hit hardest exactly where the old centralized grid never bothered to arrive.

### the long game

Edison lost the first war on hardware. He may still win the long game on architecture. The company named after the man who proved alternating current could power a planet is now the one proving the planet doesn't actually need it, while the state that refused to synchronize its clocks found a way to import power without importing Washington.

Somewhere, the most ruthless man in early American technology is still getting the last laugh.
