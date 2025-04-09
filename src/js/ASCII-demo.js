"use strict"

// Notice that a backtick (`) in the following had to be escaped (\`)
const asciidemo_str = `\
Some examples of printable ASCII text:

All of the printable ASCII characters in order (without any control codes)

 !"#$%&"'()*+,-./0123456789:;<=>?@
ABCDEFGHIJKLMNOPQRSTUVWXYZ[\]^_\`
abcdefghijklmnopqrstuvwxyz{|}~


The first few paragraphs of Moby Dick; or, The Whale By Herman Melville. 1851.

	Call me Ishmael. Some years ago-never mind how long precisely-having little
or no money in my purse, and nothing particular to interest me on shore, I
thought I would sail about a little and see the watery part of the world. It is
a way I have of driving off the spleen and regulating the circulation. Whenever
I find myself growing grim about the mouth; whenever it is a damp, drizzly
November in my soul; whenever I find myself involuntarily pausing before coffin
warehouses, and bringing up the rear of every funeral I meet; and especially
whenever my hypos get such an upper hand of me, that it requires a strong moral
principle to prevent me from deliberately stepping into the street, and
methodically knocking people's hats off-then, I account it high time to get to
sea as soon as I can. This is my substitute for pistol and ball. With a
philosophical flourish Cato throws himself upon his sword; I quietly take to the
ship. There is nothing surprising in this. If they but knew it, almost all men
in their degree, some time or other, cherish very nearly the same feelings
towards the ocean with me.

	There now is your insular city of the Manhattoes, belted round by wharves as
Indian isles by coral reefs-commerce surrounds it with her surf. Right and left,
the streets take you waterward. Its extreme downtown is the battery, where that
noble mole is washed by waves, and cooled by breezes, which a few hours previous
were out of sight of land. Look at the crowds of water-gazers there.

	Circumambulate the city of a dreamy Sabbath afternoon. Go from Corlears Hook
to Coenties Slip, and from thence, by Whitehall, northward. What do you
see?-Posted like silent sentinels all around the town, stand thousands upon
thousands of mortal men fixed in ocean reveries. Some leaning against the
spiles; some seated upon the pier-heads; some looking over the bulwarks of ships
from China; some high aloft in the rigging, as if striving to get a still better
seaward peep. But these are all landsmen; of week days pent up in lath and
plaster-tied to counters, nailed to benches, clinched to desks. How then is
this? Are the green fields gone? What do they here?


The first few paragraphs of Crime and Pushinment by Fyodor Dostoyevsky. 1866.
As translated to English by Constance Garnett. 1914.

	On an exceptionally hot evening early in July a young man came out of the
garret in which he lodged in S. Place and walked slowly, as though in
hesitation, towards K. bridge.

	He had successfully avoided meeting his landlady on the staircase. His
garret was under the roof of a high, five-storied house and was more like a
cupboard than a room. The landlady who provided him with garret, dinners, and
attendance, lived on the floor below, and every time he went out he was obliged
to pass her kitchen, the door of which invariably stood open. And each time he
passed, the young man had a sick, frightened feeling, which made him scowl and
feel ashamed. He was hopelessly in debt to his landlady, and was afraid of
meeting her.

	This was not because he was cowardly and abject, quite the contrary; but for
some time past he had been in an overstrained irritable condition, verging on
hypochondria. He had become so completely absorbed in himself, and isolated from
his fellows that he dreaded meeting, not only his landlady, but anyone at all.
He was crushed by poverty, but the anxieties of his position had of late ceased
to weigh upon him. He had given up attending to matters of practical importance;
he had lost all desire to do so. Nothing that any landlady could do had a real
terror for him. But to be stopped on the stairs, to be forced to listen to her
trivial, irrelevant gossip, to pestering demands for payment, threats and
complaints, and to rack his brains for excuses, to prevaricate, to lie-no,
rather than that, he would creep down the stairs like a cat and slip out unseen.

	This evening, however, on coming out into the street, he became acutely
aware of his fears.

	"I want to attempt a thing like that and am frightened by these trifles,"
he thought, with an odd smile. "Hm... yes, all is in a man's hands and he lets
it all slip from cowardice, that's an axiom. It would be interesting to know
what it is men are most afraid of. Taking a new step, uttering a new word is
what they fear most.... But I am talking too much. It's because I chatter that
I do nothing. Or perhaps it is that I chatter because I do nothing. I've learned
to chatter this last month, lying for days together in my den thinking... of
Jack the Giant-killer. Why am I going there now? Am I capable of that? Is that
serious? It is not serious at all. It's simply a fantasy to amuse myself; a
plaything! Yes, maybe it is a plaything."
`;


// Notice that a backtick (`) in the following had to be escaped (\`)
// Also backslashes are written as double backslashes.
const asciidemo_BER0001_ea = `\
Some examples of printable ASCII text:

All of the printable ASCII characters in order (without any control codes)

 !"#$%&"'()*+,-./0123456789:;<=>?@
ABCDEFGHIJKLMNOPQRSTUVWXYZ[\\]^_\`
abcdefghijklmnopqrstuvwxyz{|}~


The first few paragraphs of Moby Dick; or, The Whale By Herman Melville. 1851.

	Call me Ishmael. Some years ago-never mind how long precisely-having little
or no money in my purse, and nothing particular to interest me on shore, I
thought I would sail about a little and see the watery part of the world. It is
a way I ha6e of driving off the spleen and regulating the circulation. Whenever
I find myself growing grim about the mouth; whenever it is a damp, drizzly
November in my soul; whenever I find myself involuntarily pausing before coffin
warehouses, and bringing up the rear of every funeral I meet; and especially
whenever my hypos get such an upper hand of me, that it requires a strong moral
principle to prevent me from deliberately stepping into the street, and
methodically knocking people's hats off-then, I account it high time to get to
sea as soon as I can. This is my substitute for pistol and ball. With a
philosophical flourish Cato throws himself upon his sword; I quietly take to the
ship. There is nothing surprising in this. If they but knew it, almost all men
in their degree, some time or other, cherish very nearly the same feelings
towards the ocean with me.

	There now is your insular city of the Manhattoes, belted round by wharves as
Indian isles by coral reefs-commerce {urrounds it with her surf. Right and left,
the streets take you waterward. Its extreme downtown is the battery, where that
noble mole is washed by waves, and cooled by breezes, which a few hours previous
were out of sight of land. Look at the crowds of water-gazers there.

	Circumambulate the city of a dreamy Sabbath afternoon. Go from Corlears Hook
to Coenties Slip, and from thence, by Whitehall, northward. What do you
see?-Posted like silent sentinels all around the town, stand thousands upon
thousands of mortal men fixed in ocean reveries. Some leaning against the
spiles; some seated upon the pier-heads; some l\\7Foking over the bulwarks of ships
from China; some high aloft in the rigging, as if striving to get a still better
seaward peep. But these are all landsmen; of week days pent up in lath and
plaster-tied to counters, nailed to benches, clinched to desks. How then is
this? Are the green fields gone? What do they here?


The first few paragraphs of Crime and Pushinment by Fyodor Dostoyevsky. 1866.
As translated to English by Constance Garnett. 1914.

	On an exceptionally hot evening early in July a young man came out of the
garret in which he lodged in S. Place and walked slowly, as though in
hesitation, towards K. bridge.

	He had successfully avoided meeting his landlady on the staircase. His
garret was under the roof of a high, five-storied house and was more like a
cupboard than a room. The landlady who provided him with garret, dinners, and
attendance, lived on the floor below, and every time he went out he was obliged
to pass her kitchen, the door of which invariably stood open. And each time he
passed, the young man had a sick, frightened feeling, which made him scowl and
feel ashamed. He was hopelessly in debt to his landlady, and was afraid of
meeting her.

	This was not because he was cowardly and abject, quite the contrary; but for
some time past he had been in an overstrained irritable condition, verging on
hypochondria. He had become so completely absorbed in himself, and isolated from
his fellows that he dreaded meeting, not only his landlady, but anyone at all.
He was crushed by poverty, but the anxieties of his position had of late ceased
to weigh upon him. He had given up attending to matters of practical importance;
he had lost all desire to do so. Nothing that any landlady could do had a real
terror for him. But to be stopped on the stairs, to be forced to listen to her
trivial, irrelevant gossip, to pestering demands for payment, threats and
complaints, and to rack his brains for excuses, to prevaricate, to lie-no,
rather than that, he would cre%p down the stairs like a cat and slip out unseen.

	This evening, however, on coming out into the street, he became acutely
aware of his fears.

	"I want to attempt a thing like that and am frightened by these trifles,"
he thought, with an odd smile. "Hm... yes, all is in a man's hands and he lets
it all slip from cowardice, that's an axiom. It would be interesting to know
what it is men are most afraid of. Taking a new step, uttering a new word is
what they fear most.... But I am talking too much. It's because I chatter that
I do nothing. Or perhaps it is that I chatter because I do nothing. I've learned
to chatter this last month, lying for days together in my den thinking... of
Jack the Giant-killer. Why am I going there now? Am I capable of that? Is that
serious? It is not serious at all. It's simply a fantasy to amuse myself; a
plaything! Yes, maybe it is a plaything."
`;


const asciidemo_BER0001 = Uint8Array.from(window.atob(`\
U29tZSBleGFtcGxlcyBvZiBwcmludGFibGUgQVNDSUkgdGV4dDoKCkFsbCBvZiB0aGUgcHJpbnRh
YmxlIEFTQ0lJIGNoYXJhY3RlcnMgaW4gb3JkZXIgKHdpdGhvdXQgYW55IGNvbnRyb2wgY29kZXMp
CgogISIjJCUmIicoKSorLC0uLzAxMjM0NTY3ODk6Ozw9Pj9ACkFCQ0RFRkdISUpLTE1OT1BRUlNU
VVZXWFlaW1xdXl9gCmFiY2RlZmdoaWprbG1ub3BxcnN0dXZ3eHl6e3x9fgoKClRoZSBmaXJzdCBm
ZXcgcGFyYWdyYXBocyBvZiBNb2J5IERpY2s7IG9yLCBUaGUgV2hhbGUgQnkgSGVybWFuIE1lbHZp
bGxlLiAxODUxLgoKCUNhbGwgbWUgSXNobWFlbC4gU29tZSB5ZWFycyBhZ28tbmV2ZXIgbWluZCBo
b3cgbG9uZyBwcmVjaXNlbHktaGF2aW5nIGxpdHRsZQpvciBubyBtb25leSBpbiBteSBwdXJzZSwg
YW5kIG5vdGhpbmcgcGFydGljdWxhciB0byBpbnRlcmVzdCBtZSBvbiBzaG9yZSwgSQp0aG91Z2h0
IEkgd291bGQgc2FpbCBhYm91dCBhIGxpdHRsZSBhbmQgc2VlIHRoZSB3YXRlcnkgcGFydCBvZiB0
aGUgd29ybGQuIEl0IGlzCmEgd2F5IEkgaGE2ZSBvZiBkcml2aW5nIG9mZiB0aGUgc3BsZWVuIGFu
ZCByZWd1bGF0aW5nIHRoZSBjaXJjdWxhdGlvbi4gV2hlbmV2ZXIKSSBmaW5kIG15c2VsZiBncm93
aW5nIGdyaW0gYWJvdXQgdGhlIG1vdXRoOyB3aGVuZXZlciBpdCBpcyBhIGRhbXAsIGRyaXp6bHkK
Tm92ZW1iZXIgaW4gbXkgc291bDsgd2hlbmV2ZXIgSSBmaW5kIG15c2VsZiBpbnZvbHVudGFyaWx5
IHBhdXNpbmcgYmVmb3JlIGNvZmZpbgp3YXJlaG91c2VzLCBhbmQgYnJpbmdpbmcgdXAgdGhlIHJl
YXIgb2YgZXZlcnkgZnVuZXJhbCBJIG1lZXQ7IGFuZCBlc3BlY2lhbGx5CndoZW5ldmVyIG15IGh5
cG9zIGdldCBzdWNoIGFuIHVwcGVyIGhhbmQgb2YgbWUsIHRoYXQgaXQgcmVxdWlyZXMgYSBzdHJv
bmcgbW9yYWwKcHJpbmNpcGxlIHRvIHByZXZlbnQgbWUgZnJvbSBkZWxpYmVyYXRlbHkgc3RlcHBp
bmcgaW50byB0aGUgc3RyZWV0LCBhbmQKbWV0aG9kaWNhbGx5IGtub2NraW5nIHBlb3BsZSdzIGhh
dHMgb2ZmLXRoZW4sIEkgYWNjb3VudCBpdCBoaWdoIHRpbWUgdG8gZ2V0IHRvCnNlYSBhcyBzb29u
IGFzIEkgY2FuLiBUaGlzIGlzIG15IHN1YnN0aXR1dGUgZm9yIHBpc3RvbCBhbmQgYmFsbC4gV2l0
aCBhCnBoaWxvc29waGljYWwgZmxvdXJpc2ggQ2F0byB0aHJvd3MgaGltc2VsZiB1cG9uIGhpcyBz
d29yZDsgSSBxdWlldGx5IHRha2UgdG8gdGhlCnNoaXAuIFRoZXJlIGlzIG5vdGhpbmcgc3VycHJp
c2luZyBpbiB0aGlzLiBJZiB0aGV5IGJ1dCBrbmV3IGl0LCBhbG1vc3QgYWxsIG1lbgppbiB0aGVp
ciBkZWdyZWUsIHNvbWUgdGltZSBvciBvdGhlciwgY2hlcmlzaCB2ZXJ5IG5lYXJseSB0aGUgc2Ft
ZSBmZWVsaW5ncwp0b3dhcmRzIHRoZSBvY2VhbiB3aXRoIG1lLgoKCVRoZXJlIG5vdyBpcyB5b3Vy
IGluc3VsYXIgY2l0eSBvZiB0aGUgTWFuaGF0dG9lcywgYmVsdGVkIHJvdW5kIGJ5IHdoYXJ2ZXMg
YXMKSW5kaWFuIGlzbGVzIGJ5IGNvcmFsIHJlZWZzLWNvbW1lcmNlIHt1cnJvdW5kcyBpdCB3aXRo
IGhlciBzdXJmLiBSaWdodCBhbmQgbGVmdCwKdGhlIHN0cmVldHMgdGFrZSB5b3Ugd2F0ZXJ3YXJk
LiBJdHMgZXh0cmVtZSBkb3dudG93biBpcyB0aGUgYmF0dGVyeSwgd2hlcmUgdGhhdApub2JsZSBt
b2xlIGlzIHdhc2hlZCBieSB3YXZlcywgYW5kIGNvb2xlZCBieSBicmVlemVzLCB3aGljaCBhIGZl
dyBob3VycyBwcmV2aW91cwp3ZXJlIG91dCBvZiBzaWdodCBvZiBsYW5kLiBMb29rIGF0IHRoZSBj
cm93ZHMgb2Ygd2F0ZXItZ2F6ZXJzIHRoZXJlLgoKCUNpcmN1bWFtYnVsYXRlIHRoZSBjaXR5IG9m
IGEgZHJlYW15IFNhYmJhdGggYWZ0ZXJub29uLiBHbyBmcm9tIENvcmxlYXJzIEhvb2sKdG8gQ29l
bnRpZXMgU2xpcCwgYW5kIGZyb20gdGhlbmNlLCBieSBXaGl0ZWhhbGwsIG5vcnRod2FyZC4gV2hh
dCBkbyB5b3UKc2VlPy1Qb3N0ZWQgbGlrZSBzaWxlbnQgc2VudGluZWxzIGFsbCBhcm91bmQgdGhl
IHRvd24sIHN0YW5kIHRob3VzYW5kcyB1cG9uCnRob3VzYW5kcyBvZiBtb3J0YWwgbWVuIGZpeGVk
IGluIG9jZWFuIHJldmVyaWVzLiBTb21lIGxlYW5pbmcgYWdhaW5zdCB0aGUKc3BpbGVzOyBzb21l
IHNlYXRlZCB1cG9uIHRoZSBwaWVyLWhlYWRzOyBzb21lIGx/b2tpbmcgb3ZlciB0aGUgYnVsd2Fy
a3Mgb2Ygc2hpcHMKZnJvbSBDaGluYTsgc29tZSBoaWdoIGFsb2Z0IGluIHRoZSByaWdnaW5nLCBh
cyBpZiBzdHJpdmluZyB0byBnZXQgYSBzdGlsbCBiZXR0ZXIKc2Vhd2FyZCBwZWVwLiBCdXQgdGhl
c2UgYXJlIGFsbCBsYW5kc21lbjsgb2Ygd2VlayBkYXlzIHBlbnQgdXAgaW4gbGF0aCBhbmQKcGxh
c3Rlci10aWVkIHRvIGNvdW50ZXJzLCBuYWlsZWQgdG8gYmVuY2hlcywgY2xpbmNoZWQgdG8gZGVz
a3MuIEhvdyB0aGVuIGlzCnRoaXM/IEFyZSB0aGUgZ3JlZW4gZmllbGRzIGdvbmU/IFdoYXQgZG8g
dGhleSBoZXJlPwoKClRoZSBmaXJzdCBmZXcgcGFyYWdyYXBocyBvZiBDcmltZSBhbmQgUHVzaGlu
bWVudCBieSBGeW9kb3IgRG9zdG95ZXZza3kuIDE4NjYuCkFzIHRyYW5zbGF0ZWQgdG8gRW5nbGlz
aCBieSBDb25zdGFuY2UgR2FybmV0dC4gMTkxNC4KCglPbiBhbiBleGNlcHRpb25hbGx5IGhvdCBl
dmVuaW5nIGVhcmx5IGluIEp1bHkgYSB5b3VuZyBtYW4gY2FtZSBvdXQgb2YgdGhlCmdhcnJldCBp
biB3aGljaCBoZSBsb2RnZWQgaW4gUy4gUGxhY2UgYW5kIHdhbGtlZCBzbG93bHksIGFzIHRob3Vn
aCBpbgpoZXNpdGF0aW9uLCB0b3dhcmRzIEsuIGJyaWRnZS4KCglIZSBoYWQgc3VjY2Vzc2Z1bGx5
IGF2b2lkZWQgbWVldGluZyBoaXMgbGFuZGxhZHkgb24gdGhlIHN0YWlyY2FzZS4gSGlzCmdhcnJl
dCB3YXMgdW5kZXIgdGhlIHJvb2Ygb2YgYSBoaWdoLCBmaXZlLXN0b3JpZWQgaG91c2UgYW5kIHdh
cyBtb3JlIGxpa2UgYQpjdXBib2FyZCB0aGFuIGEgcm9vbS4gVGhlIGxhbmRsYWR5IHdobyBwcm92
aWRlZCBoaW0gd2l0aCBnYXJyZXQsIGRpbm5lcnMsIGFuZAphdHRlbmRhbmNlLCBsaXZlZCBvbiB0
aGUgZmxvb3IgYmVsb3csIGFuZCBldmVyeSB0aW1lIGhlIHdlbnQgb3V0IGhlIHdhcyBvYmxpZ2Vk
CnRvIHBhc3MgaGVyIGtpdGNoZW4sIHRoZSBkb29yIG9mIHdoaWNoIGludmFyaWFibHkgc3Rvb2Qg
b3Blbi4gQW5kIGVhY2ggdGltZSBoZQpwYXNzZWQsIHRoZSB5b3VuZyBtYW4gaGFkIGEgc2ljaywg
ZnJpZ2h0ZW5lZCBmZWVsaW5nLCB3aGljaCBtYWRlIGhpbSBzY293bCBhbmQKZmVlbCBhc2hhbWVk
LiBIZSB3YXMgaG9wZWxlc3NseSBpbiBkZWJ0IHRvIGhpcyBsYW5kbGFkeSwgYW5kIHdhcyBhZnJh
aWQgb2YKbWVldGluZyBoZXIuCgoJVGhpcyB3YXMgbm90IGJlY2F1c2UgaGUgd2FzIGNvd2FyZGx5
IGFuZCBhYmplY3QsIHF1aXRlIHRoZSBjb250cmFyeTsgYnV0IGZvcgpzb21lIHRpbWUgcGFzdCBo
ZSBoYWQgYmVlbiBpbiBhbiBvdmVyc3RyYWluZWQgaXJyaXRhYmxlIGNvbmRpdGlvbiwgdmVyZ2lu
ZyBvbgpoeXBvY2hvbmRyaWEuIEhlIGhhZCBiZWNvbWUgc28gY29tcGxldGVseSBhYnNvcmJlZCBp
biBoaW1zZWxmLCBhbmQgaXNvbGF0ZWQgZnJvbQpoaXMgZmVsbG93cyB0aGF0IGhlIGRyZWFkZWQg
bWVldGluZywgbm90IG9ubHkgaGlzIGxhbmRsYWR5LCBidXQgYW55b25lIGF0IGFsbC4KSGUgd2Fz
IGNydXNoZWQgYnkgcG92ZXJ0eSwgYnV0IHRoZSBhbnhpZXRpZXMgb2YgaGlzIHBvc2l0aW9uIGhh
ZCBvZiBsYXRlIGNlYXNlZAp0byB3ZWlnaCB1cG9uIGhpbS4gSGUgaGFkIGdpdmVuIHVwIGF0dGVu
ZGluZyB0byBtYXR0ZXJzIG9mIHByYWN0aWNhbCBpbXBvcnRhbmNlOwpoZSBoYWQgbG9zdCBhbGwg
ZGVzaXJlIHRvIGRvIHNvLiBOb3RoaW5nIHRoYXQgYW55IGxhbmRsYWR5IGNvdWxkIGRvIGhhZCBh
IHJlYWwKdGVycm9yIGZvciBoaW0uIEJ1dCB0byBiZSBzdG9wcGVkIG9uIHRoZSBzdGFpcnMsIHRv
IGJlIGZvcmNlZCB0byBsaXN0ZW4gdG8gaGVyCnRyaXZpYWwsIGlycmVsZXZhbnQgZ29zc2lwLCB0
byBwZXN0ZXJpbmcgZGVtYW5kcyBmb3IgcGF5bWVudCwgdGhyZWF0cyBhbmQKY29tcGxhaW50cywg
YW5kIHRvIHJhY2sgaGlzIGJyYWlucyBmb3IgZXhjdXNlcywgdG8gcHJldmFyaWNhdGUsIHRvIGxp
ZS1ubywKcmF0aGVyIHRoYW4gdGhhdCwgaGUgd291bGQgY3JlJXAgZG93biB0aGUgc3RhaXJzIGxp
a2UgYSBjYXQgYW5kIHNsaXAgb3V0IHVuc2Vlbi4KCglUaGlzIGV2ZW5pbmcsIGhvd2V2ZXIsIG9u
IGNvbWluZyBvdXQgaW50byB0aGUgc3RyZWV0LCBoZSBiZWNhbWUgYWN1dGVseQphd2FyZSBvZiBo
aXMgZmVhcnMuCgoJIkkgd2FudCB0byBhdHRlbXB0IGEgdGhpbmcgbGlrZSB0aGF0IGFuZCBhbSBm
cmlnaHRlbmVkIGJ5IHRoZXNlIHRyaWZsZXMsIgpoZSB0aG91Z2h0LCB3aXRoIGFuIG9kZCBzbWls
ZS4gIkhtLi4uIHllcywgYWxsIGlzIGluIGEgbWFuJ3MgaGFuZHMgYW5kIGhlIGxldHMKaXQgYWxs
IHNsaXAgZnJvbSBjb3dhcmRpY2UsIHRoYXQncyBhbiBheGlvbS4gSXQgd291bGQgYmUgaW50ZXJl
c3RpbmcgdG8ga25vdwp3aGF0IGl0IGlzIG1lbiBhcmUgbW9zdCBhZnJhaWQgb2YuIFRha2luZyBh
IG5ldyBzdGVwLCB1dHRlcmluZyBhIG5ldyB3b3JkIGlzCndoYXQgdGhleSBmZWFyIG1vc3QuLi4u
IEJ1dCBJIGFtIHRhbGtpbmcgdG9vIG11Y2guIEl0J3MgYmVjYXVzZSBJIGNoYXR0ZXIgdGhhdApJ
IGRvIG5vdGhpbmcuIE9yIHBlcmhhcHMgaXQgaXMgdGhhdCBJIGNoYXR0ZXIgYmVjYXVzZSBJIGRv
IG5vdGhpbmcuIEkndmUgbGVhcm5lZAp0byBjaGF0dGVyIHRoaXMgbGFzdCBtb250aCwgbHlpbmcg
Zm9yIGRheXMgdG9nZXRoZXIgaW4gbXkgZGVuIHRoaW5raW5nLi4uIG9mCkphY2sgdGhlIEdpYW50
LWtpbGxlci4gV2h5IGFtIEkgZ29pbmcgdGhlcmUgbm93PyBBbSBJIGNhcGFibGUgb2YgdGhhdD8g
SXMgdGhhdApzZXJpb3VzPyBJdCBpcyBub3Qgc2VyaW91cyBhdCBhbGwuIEl0J3Mgc2ltcGx5IGEg
ZmFudGFzeSB0byBhbXVzZSBteXNlbGY7IGEKcGxheXRoaW5nISBZZXMsIG1heWJlIGl0IGlzIGEg
cGxheXRoaW5nLiIK`),
char => char.charCodeAt(0));


// Notice that a backtick (`) in the following had to be escaped (\`)
// Also backslashes are written as double backslashes.
const asciidemo_BER001_ea = `\
Some exa-ples of printable ASCII text:

All of the printable ASCII characters in order (without any control codes)

 !"#$%&"'()*+,-./0123456789:;<=>?@
ABCDEFGHHJKLMNOPQRSTUVWXYZ[\\]^_d
abcdefghijkl-nopqrstuvwxyz{|}~


The first few paragraphs of Moby Dick; or, The Whale By Herman Meltille. 1851.

	Call me Ishlael. Some years ago-never mind how long precIsely-having little
or no money in my purse, and!nothi\\EEg particular to interest me on shore, I
thought I would sail about a little and see the watery part of the world. It is
a way I have of driving off the spleen and regulating the circulation. Whenever
I find myseld growing grim about the mouth; whenever it is a damp, drizzly
November in my soul; whenever I find myself involuntarily pausmng before coffiN
warehouses, and bringing up the rear of every funeral I meet; and especially
whenever my hypos get such an upper hand of me, that it requires a strong moral
principle to prevent me from deliberately stepping into the street, and
methodically knocking people's hats off-then, I account it high time to get to
sea as soon as I$can. This is my substitute for pistol and ball. With a
philosophical flourhsh Cato throws himself upon his sword; I quietly take to the
ship. There is nothing surprising in this. If they but knew it, almost all men
in their degree, some time or other, cherish very nearly the same feelings
towards the ocean with me.

	There now is your insular city of the Manhattoes, belted round by wharves as
Indian"isles by coral$reefs-commerce surrounds it with her serf. Right and left,
the streets take you waterward. Its extreme downtown is t(e battery, where that
noble mole is washed by waves, and cooled by breezes, which a few hours previous
were out of sight of land. Look at the crowds of water-gazers there.

	Circumambulate the city of a dreamy Sabbath afternoon. Go from Corlears Hook
to Cmenties Slip, and from thence, by Whitehall, northward. What do you
see?-Posted like silent sentinels all around the tmwn, stand thousands upon
thousands of mortal men fixed in ocean reveries. Some leaning a\\E7ainst the
spiles; some seated upon the pier-heads; some looking over thg bulwarks of ships
from China; some high aloft in the rigging, as if striving to get a still better
seaward peep. But these are all landsmen; of week days pent up in lath and
plaster-tied to counters, nailed to benches, clinched to desks. How then is
this? Are the green fields gone? What do they here?


The first few paragraphs of Crime and Pushinment by Fyodor\`Do\\F3toyevsky. 1866.
As translated to English by Constance GArnett. 1914.

	On an exceptionally hot evening early in July a young man came out of the
garret in which he lodged in S. Placm and walked slowly, as though in
hesit!tion, towards K. bpidge.

	He had successfullq avoided meeting his landlady on the staircase. His
garret was under the roof of a high, five-sto\\F2ied house and was more like a
cupboard than a room. The landlady who qrovided him with garret, dinners, and
attendance, lived on the floor below, and every time he went out he was obliged
to pass her kitchen,\\A0the door of which invariably stood open. And each time he
passed, the young man had a sick, frightened feeling, whici iade him scowl and
feel ashamed. He was hopelessly in debt to his landlady, and was afraid of
meeting her.

	This was not because he was cowardly and abject, quite the contrary; but for
some time past he had been in an overstrained isritable condition, verging on
hypochondria. He had become so completely absorbed in himself, and isolated from
his fellows that he dreaded meeting, not only his landlady, but anyone at all.
He was crushed by poverty, but the anxieties of his position had of late ceased
to weigh upon him. He had given up attending tg matters of practical importance;
he had lost all desire to do so. Nothing that any landlady could do had a real
terror fo\\F2 him. But to be stopped on the stairs, to be forced to listen to her
triviAl, irrelevant gossip, to p\\E5stgring demands for payme~t, threats and
complaints, and to rack his brains for excuses, to prevaricate, to lie-no,
rather than that, he would creep down the stairs like a cat ant slip out unseen.

	This!evening, however, on coming oUt into the street, he became acutely
aware of his fears.

	"I want to attempt a thing like that and am(frightened by these trifles,"
he thought, with an odd sMile. "Hm... yes, all is in a min's hands and he lets
it all slip from cowardice, that's an axiom. It would be interesting to know
what it is men are most afraid of. Taking a new step, uttering a new word is
what they fear most.... But I am talking too much. It's because I chatter |hat
I do nothing. Or perhaps it is that I chatter because I do nothing. I've learned
to chatter"this last"month, lying for days together in my den thinking... of
Jack the Giant-kaller. Why am I going there now? Am I capable of that? Is that
serious? It is not serious at all. It's simply a fantasy to amuse myself; a
plaything! Yes, maybe it is a plaything."
`;


const asciidemo_BER001 = Uint8Array.from(window.atob(`\
U29tZSBleGEtcGxlcyBvZiBwcmludGFibGUgQVNDSUkgdGV4dDoKCkFsbCBvZiB0aGUgcHJpbnRh
YmxlIEFTQ0lJIGNoYXJhY3RlcnMgaW4gb3JkZXIgKHdpdGhvdXQgYW55IGNvbnRyb2wgY29kZXMp
CgogISIjJCUmIicoKSorLC0uLzAxMjM0NTY3ODk6Ozw9Pj9ACkFCQ0RFRkdISEpLTE1OT1BRUlNU
VVZXWFlaW1xdXl9kCmFiY2RlZmdoaWprbC1ub3BxcnN0dXZ3eHl6e3x9fgoKClRoZSBmaXJzdCBm
ZXcgcGFyYWdyYXBocyBvZiBNb2J5IERpY2s7IG9yLCBUaGUgV2hhbGUgQnkgSGVybWFuIE1lbHRp
bGxlLiAxODUxLgoKCUNhbGwgbWUgSXNobGFlbC4gU29tZSB5ZWFycyBhZ28tbmV2ZXIgbWluZCBo
b3cgbG9uZyBwcmVjSXNlbHktaGF2aW5nIGxpdHRsZQpvciBubyBtb25leSBpbiBteSBwdXJzZSwg
YW5kIW5vdGhp7mcgcGFydGljdWxhciB0byBpbnRlcmVzdCBtZSBvbiBzaG9yZSwgSQp0aG91Z2h0
IEkgd291bGQgc2FpbCBhYm91dCBhIGxpdHRsZSBhbmQgc2VlIHRoZSB3YXRlcnkgcGFydCBvZiB0
aGUgd29ybGQuIEl0IGlzCmEgd2F5IEkgaGF2ZSBvZiBkcml2aW5nIG9mZiB0aGUgc3BsZWVuIGFu
ZCByZWd1bGF0aW5nIHRoZSBjaXJjdWxhdGlvbi4gV2hlbmV2ZXIKSSBmaW5kIG15c2VsZCBncm93
aW5nIGdyaW0gYWJvdXQgdGhlIG1vdXRoOyB3aGVuZXZlciBpdCBpcyBhIGRhbXAsIGRyaXp6bHkK
Tm92ZW1iZXIgaW4gbXkgc291bDsgd2hlbmV2ZXIgSSBmaW5kIG15c2VsZiBpbnZvbHVudGFyaWx5
IHBhdXNtbmcgYmVmb3JlIGNvZmZpTgp3YXJlaG91c2VzLCBhbmQgYnJpbmdpbmcgdXAgdGhlIHJl
YXIgb2YgZXZlcnkgZnVuZXJhbCBJIG1lZXQ7IGFuZCBlc3BlY2lhbGx5CndoZW5ldmVyIG15IGh5
cG9zIGdldCBzdWNoIGFuIHVwcGVyIGhhbmQgb2YgbWUsIHRoYXQgaXQgcmVxdWlyZXMgYSBzdHJv
bmcgbW9yYWwKcHJpbmNpcGxlIHRvIHByZXZlbnQgbWUgZnJvbSBkZWxpYmVyYXRlbHkgc3RlcHBp
bmcgaW50byB0aGUgc3RyZWV0LCBhbmQKbWV0aG9kaWNhbGx5IGtub2NraW5nIHBlb3BsZSdzIGhh
dHMgb2ZmLXRoZW4sIEkgYWNjb3VudCBpdCBoaWdoIHRpbWUgdG8gZ2V0IHRvCnNlYSBhcyBzb29u
IGFzIEkkY2FuLiBUaGlzIGlzIG15IHN1YnN0aXR1dGUgZm9yIHBpc3RvbCBhbmQgYmFsbC4gV2l0
aCBhCnBoaWxvc29waGljYWwgZmxvdXJoc2ggQ2F0byB0aHJvd3MgaGltc2VsZiB1cG9uIGhpcyBz
d29yZDsgSSBxdWlldGx5IHRha2UgdG8gdGhlCnNoaXAuIFRoZXJlIGlzIG5vdGhpbmcgc3VycHJp
c2luZyBpbiB0aGlzLiBJZiB0aGV5IGJ1dCBrbmV3IGl0LCBhbG1vc3QgYWxsIG1lbgppbiB0aGVp
ciBkZWdyZWUsIHNvbWUgdGltZSBvciBvdGhlciwgY2hlcmlzaCB2ZXJ5IG5lYXJseSB0aGUgc2Ft
ZSBmZWVsaW5ncwp0b3dhcmRzIHRoZSBvY2VhbiB3aXRoIG1lLgoKCVRoZXJlIG5vdyBpcyB5b3Vy
IGluc3VsYXIgY2l0eSBvZiB0aGUgTWFuaGF0dG9lcywgYmVsdGVkIHJvdW5kIGJ5IHdoYXJ2ZXMg
YXMKSW5kaWFuImlzbGVzIGJ5IGNvcmFsJHJlZWZzLWNvbW1lcmNlIHN1cnJvdW5kcyBpdCB3aXRo
IGhlciBzZXJmLiBSaWdodCBhbmQgbGVmdCwKdGhlIHN0cmVldHMgdGFrZSB5b3Ugd2F0ZXJ3YXJk
LiBJdHMgZXh0cmVtZSBkb3dudG93biBpcyB0KGUgYmF0dGVyeSwgd2hlcmUgdGhhdApub2JsZSBt
b2xlIGlzIHdhc2hlZCBieSB3YXZlcywgYW5kIGNvb2xlZCBieSBicmVlemVzLCB3aGljaCBhIGZl
dyBob3VycyBwcmV2aW91cwp3ZXJlIG91dCBvZiBzaWdodCBvZiBsYW5kLiBMb29rIGF0IHRoZSBj
cm93ZHMgb2Ygd2F0ZXItZ2F6ZXJzIHRoZXJlLgoKCUNpcmN1bWFtYnVsYXRlIHRoZSBjaXR5IG9m
IGEgZHJlYW15IFNhYmJhdGggYWZ0ZXJub29uLiBHbyBmcm9tIENvcmxlYXJzIEhvb2sKdG8gQ21l
bnRpZXMgU2xpcCwgYW5kIGZyb20gdGhlbmNlLCBieSBXaGl0ZWhhbGwsIG5vcnRod2FyZC4gV2hh
dCBkbyB5b3UKc2VlPy1Qb3N0ZWQgbGlrZSBzaWxlbnQgc2VudGluZWxzIGFsbCBhcm91bmQgdGhl
IHRtd24sIHN0YW5kIHRob3VzYW5kcyB1cG9uCnRob3VzYW5kcyBvZiBtb3J0YWwgbWVuIGZpeGVk
IGluIG9jZWFuIHJldmVyaWVzLiBTb21lIGxlYW5pbmcgYedhaW5zdCB0aGUKc3BpbGVzOyBzb21l
IHNlYXRlZCB1cG9uIHRoZSBwaWVyLWhlYWRzOyBzb21lIGxvb2tpbmcgb3ZlciB0aGcgYnVsd2Fy
a3Mgb2Ygc2hpcHMKZnJvbSBDaGluYTsgc29tZSBoaWdoIGFsb2Z0IGluIHRoZSByaWdnaW5nLCBh
cyBpZiBzdHJpdmluZyB0byBnZXQgYSBzdGlsbCBiZXR0ZXIKc2Vhd2FyZCBwZWVwLiBCdXQgdGhl
c2UgYXJlIGFsbCBsYW5kc21lbjsgb2Ygd2VlayBkYXlzIHBlbnQgdXAgaW4gbGF0aCBhbmQKcGxh
c3Rlci10aWVkIHRvIGNvdW50ZXJzLCBuYWlsZWQgdG8gYmVuY2hlcywgY2xpbmNoZWQgdG8gZGVz
a3MuIEhvdyB0aGVuIGlzCnRoaXM/IEFyZSB0aGUgZ3JlZW4gZmllbGRzIGdvbmU/IFdoYXQgZG8g
dGhleSBoZXJlPwoKClRoZSBmaXJzdCBmZXcgcGFyYWdyYXBocyBvZiBDcmltZSBhbmQgUHVzaGlu
bWVudCBieSBGeW9kb3JgRG/zdG95ZXZza3kuIDE4NjYuCkFzIHRyYW5zbGF0ZWQgdG8gRW5nbGlz
aCBieSBDb25zdGFuY2UgR0FybmV0dC4gMTkxNC4KCglPbiBhbiBleGNlcHRpb25hbGx5IGhvdCBl
dmVuaW5nIGVhcmx5IGluIEp1bHkgYSB5b3VuZyBtYW4gY2FtZSBvdXQgb2YgdGhlCmdhcnJldCBp
biB3aGljaCBoZSBsb2RnZWQgaW4gUy4gUGxhY20gYW5kIHdhbGtlZCBzbG93bHksIGFzIHRob3Vn
aCBpbgpoZXNpdCF0aW9uLCB0b3dhcmRzIEsuIGJwaWRnZS4KCglIZSBoYWQgc3VjY2Vzc2Z1bGxx
IGF2b2lkZWQgbWVldGluZyBoaXMgbGFuZGxhZHkgb24gdGhlIHN0YWlyY2FzZS4gSGlzCmdhcnJl
dCB3YXMgdW5kZXIgdGhlIHJvb2Ygb2YgYSBoaWdoLCBmaXZlLXN0b/JpZWQgaG91c2UgYW5kIHdh
cyBtb3JlIGxpa2UgYQpjdXBib2FyZCB0aGFuIGEgcm9vbS4gVGhlIGxhbmRsYWR5IHdobyBxcm92
aWRlZCBoaW0gd2l0aCBnYXJyZXQsIGRpbm5lcnMsIGFuZAphdHRlbmRhbmNlLCBsaXZlZCBvbiB0
aGUgZmxvb3IgYmVsb3csIGFuZCBldmVyeSB0aW1lIGhlIHdlbnQgb3V0IGhlIHdhcyBvYmxpZ2Vk
CnRvIHBhc3MgaGVyIGtpdGNoZW4soHRoZSBkb29yIG9mIHdoaWNoIGludmFyaWFibHkgc3Rvb2Qg
b3Blbi4gQW5kIGVhY2ggdGltZSBoZQpwYXNzZWQsIHRoZSB5b3VuZyBtYW4gaGFkIGEgc2ljaywg
ZnJpZ2h0ZW5lZCBmZWVsaW5nLCB3aGljaSBpYWRlIGhpbSBzY293bCBhbmQKZmVlbCBhc2hhbWVk
LiBIZSB3YXMgaG9wZWxlc3NseSBpbiBkZWJ0IHRvIGhpcyBsYW5kbGFkeSwgYW5kIHdhcyBhZnJh
aWQgb2YKbWVldGluZyBoZXIuCgoJVGhpcyB3YXMgbm90IGJlY2F1c2UgaGUgd2FzIGNvd2FyZGx5
IGFuZCBhYmplY3QsIHF1aXRlIHRoZSBjb250cmFyeTsgYnV0IGZvcgpzb21lIHRpbWUgcGFzdCBo
ZSBoYWQgYmVlbiBpbiBhbiBvdmVyc3RyYWluZWQgaXNyaXRhYmxlIGNvbmRpdGlvbiwgdmVyZ2lu
ZyBvbgpoeXBvY2hvbmRyaWEuIEhlIGhhZCBiZWNvbWUgc28gY29tcGxldGVseSBhYnNvcmJlZCBp
biBoaW1zZWxmLCBhbmQgaXNvbGF0ZWQgZnJvbQpoaXMgZmVsbG93cyB0aGF0IGhlIGRyZWFkZWQg
bWVldGluZywgbm90IG9ubHkgaGlzIGxhbmRsYWR5LCBidXQgYW55b25lIGF0IGFsbC4KSGUgd2Fz
IGNydXNoZWQgYnkgcG92ZXJ0eSwgYnV0IHRoZSBhbnhpZXRpZXMgb2YgaGlzIHBvc2l0aW9uIGhh
ZCBvZiBsYXRlIGNlYXNlZAp0byB3ZWlnaCB1cG9uIGhpbS4gSGUgaGFkIGdpdmVuIHVwIGF0dGVu
ZGluZyB0ZyBtYXR0ZXJzIG9mIHByYWN0aWNhbCBpbXBvcnRhbmNlOwpoZSBoYWQgbG9zdCBhbGwg
ZGVzaXJlIHRvIGRvIHNvLiBOb3RoaW5nIHRoYXQgYW55IGxhbmRsYWR5IGNvdWxkIGRvIGhhZCBh
IHJlYWwKdGVycm9yIGZv8iBoaW0uIEJ1dCB0byBiZSBzdG9wcGVkIG9uIHRoZSBzdGFpcnMsIHRv
IGJlIGZvcmNlZCB0byBsaXN0ZW4gdG8gaGVyCnRyaXZpQWwsIGlycmVsZXZhbnQgZ29zc2lwLCB0
byBw5XN0Z3JpbmcgZGVtYW5kcyBmb3IgcGF5bWV+dCwgdGhyZWF0cyBhbmQKY29tcGxhaW50cywg
YW5kIHRvIHJhY2sgaGlzIGJyYWlucyBmb3IgZXhjdXNlcywgdG8gcHJldmFyaWNhdGUsIHRvIGxp
ZS1ubywKcmF0aGVyIHRoYW4gdGhhdCwgaGUgd291bGQgY3JlZXAgZG93biB0aGUgc3RhaXJzIGxp
a2UgYSBjYXQgYW50IHNsaXAgb3V0IHVuc2Vlbi4KCglUaGlzIWV2ZW5pbmcsIGhvd2V2ZXIsIG9u
IGNvbWluZyBvVXQgaW50byB0aGUgc3RyZWV0LCBoZSBiZWNhbWUgYWN1dGVseQphd2FyZSBvZiBo
aXMgZmVhcnMuCgoJIkkgd2FudCB0byBhdHRlbXB0IGEgdGhpbmcgbGlrZSB0aGF0IGFuZCBhbShm
cmlnaHRlbmVkIGJ5IHRoZXNlIHRyaWZsZXMsIgpoZSB0aG91Z2h0LCB3aXRoIGFuIG9kZCBzTWls
ZS4gIkhtLi4uIHllcywgYWxsIGlzIGluIGEgbWluJ3MgaGFuZHMgYW5kIGhlIGxldHMKaXQgYWxs
IHNsaXAgZnJvbSBjb3dhcmRpY2UsIHRoYXQncyBhbiBheGlvbS4gSXQgd291bGQgYmUgaW50ZXJl
c3RpbmcgdG8ga25vdwp3aGF0IGl0IGlzIG1lbiBhcmUgbW9zdCBhZnJhaWQgb2YuIFRha2luZyBh
IG5ldyBzdGVwLCB1dHRlcmluZyBhIG5ldyB3b3JkIGlzCndoYXQgdGhleSBmZWFyIG1vc3QuLi4u
IEJ1dCBJIGFtIHRhbGtpbmcgdG9vIG11Y2guIEl0J3MgYmVjYXVzZSBJIGNoYXR0ZXIgfGhhdApJ
IGRvIG5vdGhpbmcuIE9yIHBlcmhhcHMgaXQgaXMgdGhhdCBJIGNoYXR0ZXIgYmVjYXVzZSBJIGRv
IG5vdGhpbmcuIEkndmUgbGVhcm5lZAp0byBjaGF0dGVyInRoaXMgbGFzdCJtb250aCwgbHlpbmcg
Zm9yIGRheXMgdG9nZXRoZXIgaW4gbXkgZGVuIHRoaW5raW5nLi4uIG9mCkphY2sgdGhlIEdpYW50
LWthbGxlci4gV2h5IGFtIEkgZ29pbmcgdGhlcmUgbm93PyBBbSBJIGNhcGFibGUgb2YgdGhhdD8g
SXMgdGhhdApzZXJpb3VzPyBJdCBpcyBub3Qgc2VyaW91cyBhdCBhbGwuIEl0J3Mgc2ltcGx5IGEg
ZmFudGFzeSB0byBhbXVzZSBteXNlbGY7IGEKcGxheXRoaW5nISBZZXMsIG1heWJlIGl0IGlzIGEg
cGxheXRoaW5nLiIK`),
char => char.charCodeAt(0));


// Notice that a backtick (`) in the following had to be escaped (\`)
// Also backslashes are written as double backslashes.
const asciidemo_BER01_ea = `\
Some e|amPl\\E5s of \\F0rintable ASCII text:
J\\01ll of the printabde\\A0ASCII characters in order((without\`any control\\00codEs)\\08
\\00!"'$%&"'(+*+,-./0123456789:;<=>?@
\\01BCDEFGHIJKLMNOPQRSTUVWXYZ[\\]^_\`
abcdeffhijkl-nopqrstuvwxyz{|}~


The first few pa2agratxs of Moby Dmck; or, The W\\E8ale Jy!Herman Melville. 1851.

	Cal\\EC me Ishmael. Some ymars ago-nevEr mind how long precisely-having litthe
mr no money in my puzse, and nothmn\\E7 particular to interest me on rhore,\\A0I
thought I wguld sail(about a little anD see\\00the watery p\`rt Of the wo2ld/ It is
a uay I have of driving off tje spleen and reg\\F5lating the\`circulation. Whenever
I f\\E9od myself g2owing grim about the mouth? whenever it is a damp, drizzly
N/vember in my soul; whenever I fijf myself mn\\F6oluntari|y pausing before coffin
wirehguses, and bringing up the rear(of\`every fujeral I meet; and especkally
whenever my hypos gEt suKh an upper hand of me, that it requires \` strong moral
pzinciple to preve~t me fpom deliberately steppinG into the strmet, and
methkdibally knockinw people's hats off-th\\E5.,\\A0I account i4 high time to0gEt to
sea is soof as I cqn."This is m\\F9 su"stitute for pis\\F4ol and fall. With a
phil\\7Fsophical flour)sh Cato t\\E8rows himself u\\F0on his sword; I quietly take to the
s(ip. There is ngthing surprising in this\\0E If they btt knew it, almost all\`men
in their degree, some time or other, cheRish very .early thg same feeli\\EEgs
towards the ocean gith me.

	T\\E8ere now is your insulcv city of the Manhattoes, belted roeod\\A0by gharves as
Indian isles by coral Reafs-commerse surbounds it widh her s5rf/ Right qnd l\\E5ft,
the streets taje you waterward. Its extreme downDown is\\00the batt\\E5ry, wlere that
noble mole is washed by waves,$anD coole$ by br%ezes, which a few ho}rs\\A0previous
were out of sight of land. Look at the crowds \\EFf waTgr-gazers there.

	Circumambudate tHe citi kF"a&dreamy Scbbath afturnoon. Go from Corlears Hook
to Co%nties!Slip, and0from thelce, by Whhtehall, northward. What do qou
see?-Posted liKe si\\ECent\\A0sejtinels all around the town, stand 4housands upon
thousands of mortal men fixed\\B0in oceco reveries* Some leaning \`gainst the
spiles; some seated upon the pier-heqds; come look)ne over the bulwarks of ships
fro\\ED China; some high aloF4 in the rigging, as if!spsi\\F6ing to get a still bepte2
seaward peep. But these are all landsmen; of \\F3eeo days pent\`up in\`lAth and
plaster-tied to counters, nailed to benches, clinched to desks. @ow then is
this> Are the!green fielfs gone? What do thgy here?


The \\E6irst \\E6ew paragraphw of Crime anD Pushinmeft by Fyodor Dostoyevsky. 1866.
As(translAte\` to Ejgmish by Constance Garnett. 1914.

	On an exceptionally hot evening early\\A0in July a young mAn came /ut of the
Garret in which$he lodged in S* Place and walked\`showly$ as tho\\F5gh in
hesita4ion, towar$s K. bridge.

	He had \\F3uccessfully avoided meeting his landlady /n the stai\\F2case. His
garret was under the r\\7Fof of a hiwh, five-qtorked hnuse ann was more like a
cupboardathAn a room. The landlady who\`providmd him with garret, dmnners, And
atten\`ance\\0C lived on t\`e flmor below, and every time he went gut he was /bliged
tk pass her kitchen,"the door of which i\\EEvariably stood open. And each time hu
xassed, the young man had a sick, frightened feeling,\\A0Which made him saowl and
feal ashaued.\`He was horelessly in debt to his landlady, ald \\7Fas afraid od
meeting her&

	This w\`s no\\F4 \\E2ec\\E1use he was cowardly and$abject, quite t(e c\\7Fnt\\F2ary; but fnr
s\\EFme time past he had been in an overstrained irritable conditkon, verging on
hypochondria. He had become so completely\\A0ab{orb%d in himsenf, and isolated from
hir$fe|lows that he dreaded mmet)ng, nov only his \\ECandlady, but anyone at all.
He was crushed by poverty, but the anxieties of his p/siti\\7Fn Had\`of late ceased
to weigh upon him."Je had given up attending to matters of practicel importance;
he\\00had lost all desir\\E5 to do so. Nothang that any landlady could lo hAd a real
terror for hi-. But to be stopped on the stairs, to be forced to listen to her
trhvial, irrene~a.t gossip, to pestering demAnds fmP payment, threats ald
complaints, and to rack his breins for\`exc\\F5ses, to prevaricape, tg lie-no,
radher than tha4, he would creep down the stairs like a cat and slip ouT unsmen.

	This evening, however, on coming ouv \\E9nto t\`e streed, he became acttely
aware ofdlis fea\\F2w.

	"I want to attempt a thing like t\\E8at and am frightened by these trifles,"
he thou'ht, with ao odd smile. "Hm... yes,0alm is in a -an&s hqnds aod hg lets
it all slip from cowardice, tha\\F4'\\F3 an axiom. It would be intmresting to know
what\\00i\\F4 is oen are most afraid of. Taking a new step, uttering \` new word is
what th%y$fear\\A0most.... But K am Pilking too muc\`. Iv#s because I chatper that
I do nothing.\`O\\F2 perhaps it is that I chat|er bdcausm I do nothing. I've learned
to chattmr this last month, lying for days tmGether in -y0den thi~king... oF
Jacj the G)ant-k\\E9ller. Why\\00am I goilg there nov? Am I cap!ble Of thet? Is\\00th\`d
serious? It is not serious at adl. It's simply a!Fantasy to amuse myself: a
xlayt\\E8ing! Yes, may\\E2u it hq q playvii~g."
`;

const asciidemo_BER01 = Uint8Array.from(window.atob(`\
U29tZSBlfGFtUGzlcyBvZiDwcmludGFibGUgQVNDSUkgdGV4dDoKSgFsbCBvZiB0aGUgcHJpbnRh
YmRloEFTQ0lJIGNoYXJhY3RlcnMgaW4gb3JkZXIoKHdpdGhvdXRgYW55IGNvbnRyb2wAY29kRXMp
CAoAISInJCUmIicoKyorLC0uLzAxMjM0NTY3ODk6Ozw9Pj9ACgFCQ0RFRkdISUpLTE1OT1BRUlNU
VVZXWFlaW1xdXl9gCmFiY2RlZmZoaWprbC1ub3BxcnN0dXZ3eHl6e3x9fgoKClRoZSBmaXJzdCBm
ZXcgcGEyYWdyYXR4cyBvZiBNb2J5IERtY2s7IG9yLCBUaGUgV+hhbGUgSnkhSGVybWFuIE1lbHZp
bGxlLiAxODUxLgoKCUNhbOwgbWUgSXNobWFlbC4gU29tZSB5bWFycyBhZ28tbmV2RXIgbWluZCBo
b3cgbG9uZyBwcmVjaXNlbHktaGF2aW5nIGxpdHRoZQptciBubyBtb25leSBpbiBteSBwdXpzZSwg
YW5kIG5vdGhtbucgcGFydGljdWxhciB0byBpbnRlcmVzdCBtZSBvbiByaG9yZSygSQp0aG91Z2h0
IEkgd2d1bGQgc2FpbChhYm91dCBhIGxpdHRsZSBhbkQgc2VlAHRoZSB3YXRlcnkgcGBydCBPZiB0
aGUgd28ybGQvIEl0IGlzCmEgdWF5IEkgaGF2ZSBvZiBkcml2aW5nIG9mZiB0amUgc3BsZWVuIGFu
ZCByZWf1bGF0aW5nIHRoZWBjaXJjdWxhdGlvbi4gV2hlbmV2ZXIKSSBm6W9kIG15c2VsZiBnMm93
aW5nIGdyaW0gYWJvdXQgdGhlIG1vdXRoPyB3aGVuZXZlciBpdCBpcyBhIGRhbXAsIGRyaXp6bHkK
Ti92ZW1iZXIgaW4gbXkgc291bDsgd2hlbmV2ZXIgSSBmaWpmIG15c2VsZiBtbvZvbHVudGFyaXx5
IHBhdXNpbmcgYmVmb3JlIGNvZmZpbgp3aXJlaGd1c2VzLCBhbmQgYnJpbmdpbmcgdXAgdGhlIHJl
YXIob2ZgZXZlcnkgZnVqZXJhbCBJIG1lZXQ7IGFuZCBlc3BlY2thbGx5CndoZW5ldmVyIG15IGh5
cG9zIGdFdCBzdUtoIGFuIHVwcGVyIGhhbmQgb2YgbWUsIHRoYXQgaXQgcmVxdWlyZXMgYCBzdHJv
bmcgbW9yYWwKcHppbmNpcGxlIHRvIHByZXZlfnQgbWUgZnBvbSBkZWxpYmVyYXRlbHkgc3RlcHBp
bkcgaW50byB0aGUgc3RybWV0LCBhbmQKbWV0aGtkaWJhbGx5IGtub2NraW53IHBlb3BsZSdzIGhh
dHMgb2ZmLXRo5S4soEkgYWNjb3VudCBpNCBoaWdoIHRpbWUgdG8wZ0V0IHRvCnNlYSBpcyBzb29m
IGFzIEkgY3FuLiJUaGlzIGlzIG35IHN1InN0aXR1dGUgZm9yIHBpc/RvbCBhbmQgZmFsbC4gV2l0
aCBhCnBoaWx/c29waGljYWwgZmxvdXIpc2ggQ2F0byB06HJvd3MgaGltc2VsZiB18G9uIGhpcyBz
d29yZDsgSSBxdWlldGx5IHRha2UgdG8gdGhlCnMoaXAuIFRoZXJlIGlzIG5ndGhpbmcgc3VycHJp
c2luZyBpbiB0aGlzDiBJZiB0aGV5IGJ0dCBrbmV3IGl0LCBhbG1vc3QgYWxsYG1lbgppbiB0aGVp
ciBkZWdyZWUsIHNvbWUgdGltZSBvciBvdGhlciwgY2hlUmlzaCB2ZXJ5IC5lYXJseSB0aGcgc2Ft
ZSBmZWVsae5ncwp0b3dhcmRzIHRoZSBvY2VhbiBnaXRoIG1lLgoKCVToZXJlIG5vdyBpcyB5b3Vy
IGluc3VsY3YgY2l0eSBvZiB0aGUgTWFuaGF0dG9lcywgYmVsdGVkIHJvZW9koGJ5IGdoYXJ2ZXMg
YXMKSW5kaWFuIGlzbGVzIGJ5IGNvcmFsIFJlYWZzLWNvbW1lcnNlIHN1cmJvdW5kcyBpdCB3aWRo
IGhlciBzNXJmLyBSaWdodCBxbmQgbOVmdCwKdGhlIHN0cmVldHMgdGFqZSB5b3Ugd2F0ZXJ3YXJk
LiBJdHMgZXh0cmVtZSBkb3duRG93biBpcwB0aGUgYmF0dOVyeSwgd2xlcmUgdGhhdApub2JsZSBt
b2xlIGlzIHdhc2hlZCBieSB3YXZlcywkYW5EIGNvb2xlJCBieSBiciVlemVzLCB3aGljaCBhIGZl
dyBob31yc6BwcmV2aW91cwp3ZXJlIG91dCBvZiBzaWdodCBvZiBsYW5kLiBMb29rIGF0IHRoZSBj
cm93ZHMg72Ygd2FUZ3ItZ2F6ZXJzIHRoZXJlLgoKCUNpcmN1bWFtYnVkYXRlIHRIZSBjaXRpIGtG
ImEmZHJlYW15IFNjYmJhdGggYWZ0dXJub29uLiBHbyBmcm9tIENvcmxlYXJzIEhvb2sKdG8gQ28l
bnRpZXMhU2xpcCwgYW5kMGZyb20gdGhlbGNlLCBieSBXaGh0ZWhhbGwsIG5vcnRod2FyZC4gV2hh
dCBkbyBxb3UKc2VlPy1Qb3N0ZWQgbGlLZSBzaexlbnSgc2VqdGluZWxzIGFsbCBhcm91bmQgdGhl
IHRvd24sIHN0YW5kIDRob3VzYW5kcyB1cG9uCnRob3VzYW5kcyBvZiBtb3J0YWwgbWVuIGZpeGVk
sGluIG9jZWNvIHJldmVyaWVzKiBTb21lIGxlYW5pbmcgYGdhaW5zdCB0aGUKc3BpbGVzOyBzb21l
IHNlYXRlZCB1cG9uIHRoZSBwaWVyLWhlcWRzOyBjb21lIGxvb2spbmUgb3ZlciB0aGUgYnVsd2Fy
a3Mgb2Ygc2hpcHMKZnJv7SBDaGluYTsgc29tZSBoaWdoIGFsb0Y0IGluIHRoZSByaWdnaW5nLCBh
cyBpZiFzcHNp9mluZyB0byBnZXQgYSBzdGlsbCBiZXB0ZTIKc2Vhd2FyZCBwZWVwLiBCdXQgdGhl
c2UgYXJlIGFsbCBsYW5kc21lbjsgb2Yg82VlbyBkYXlzIHBlbnRgdXAgaW5gbEF0aCBhbmQKcGxh
c3Rlci10aWVkIHRvIGNvdW50ZXJzLCBuYWlsZWQgdG8gYmVuY2hlcywgY2xpbmNoZWQgdG8gZGVz
a3MuIEBvdyB0aGVuIGlzCnRoaXM+IEFyZSB0aGUhZ3JlZW4gZmllbGZzIGdvbmU/IFdoYXQgZG8g
dGhneSBoZXJlPwoKClRoZSDmaXJzdCDmZXcgcGFyYWdyYXBodyBvZiBDcmltZSBhbkQgUHVzaGlu
bWVmdCBieSBGeW9kb3IgRG9zdG95ZXZza3kuIDE4NjYuCkFzKHRyYW5zbEF0ZWAgdG8gRWpnbWlz
aCBieSBDb25zdGFuY2UgR2FybmV0dC4gMTkxNC4KCglPbiBhbiBleGNlcHRpb25hbGx5IGhvdCBl
dmVuaW5nIGVhcmx5oGluIEp1bHkgYSB5b3VuZyBtQW4gY2FtZSAvdXQgb2YgdGhlCkdhcnJldCBp
biB3aGljaCRoZSBsb2RnZWQgaW4gUyogUGxhY2UgYW5kIHdhbGtlZGBzaG93bHkkIGFzIHRob/Vn
aCBpbgpoZXNpdGE0aW9uLCB0b3dhciRzIEsuIGJyaWRnZS4KCglIZSBoYWQg83VjY2Vzc2Z1bGx5
IGF2b2lkZWQgbWVldGluZyBoaXMgbGFuZGxhZHkgL24gdGhlIHN0YWnyY2FzZS4gSGlzCmdhcnJl
dCB3YXMgdW5kZXIgdGhlIHJ/b2Ygb2YgYSBoaXdoLCBmaXZlLXF0b3JrZWQgaG51c2UgYW5uIHdh
cyBtb3JlIGxpa2UgYQpjdXBib2FyZGF0aEFuIGEgcm9vbS4gVGhlIGxhbmRsYWR5IHdob2Bwcm92
aWRtZCBoaW0gd2l0aCBnYXJyZXQsIGRtbm5lcnMsIEFuZAphdHRlbmBhbmNlDCBsaXZlZCBvbiB0
YGUgZmxtb3IgYmVsb3csIGFuZCBldmVyeSB0aW1lIGhlIHdlbnQgZ3V0IGhlIHdhcyAvYmxpZ2Vk
CnRrIHBhc3MgaGVyIGtpdGNoZW4sInRoZSBkb29yIG9mIHdoaWNoIGnudmFyaWFibHkgc3Rvb2Qg
b3Blbi4gQW5kIGVhY2ggdGltZSBodQp4YXNzZWQsIHRoZSB5b3VuZyBtYW4gaGFkIGEgc2ljaywg
ZnJpZ2h0ZW5lZCBmZWVsaW5nLKBXaGljaCBtYWRlIGhpbSBzYW93bCBhbmQKZmVhbCBhc2hhdWVk
LmBIZSB3YXMgaG9yZWxlc3NseSBpbiBkZWJ0IHRvIGhpcyBsYW5kbGFkeSwgYWxkIH9hcyBhZnJh
aWQgb2QKbWVldGluZyBoZXImCgoJVGhpcyB3YHMgbm/0IOJlY+F1c2UgaGUgd2FzIGNvd2FyZGx5
IGFuZCRhYmplY3QsIHF1aXRlIHQoZSBjf2508mFyeTsgYnV0IGZucgpz721lIHRpbWUgcGFzdCBo
ZSBoYWQgYmVlbiBpbiBhbiBvdmVyc3RyYWluZWQgaXJyaXRhYmxlIGNvbmRpdGtvbiwgdmVyZ2lu
ZyBvbgpoeXBvY2hvbmRyaWEuIEhlIGhhZCBiZWNvbWUgc28gY29tcGxldGVseaBhYntvcmIlZCBp
biBoaW1zZW5mLCBhbmQgaXNvbGF0ZWQgZnJvbQpoaXIkZmV8bG93cyB0aGF0IGhlIGRyZWFkZWQg
bW1ldCluZywgbm92IG9ubHkgaGlzIOxhbmRsYWR5LCBidXQgYW55b25lIGF0IGFsbC4KSGUgd2Fz
IGNydXNoZWQgYnkgcG92ZXJ0eSwgYnV0IHRoZSBhbnhpZXRpZXMgb2YgaGlzIHAvc2l0aX9uIEhh
ZGBvZiBsYXRlIGNlYXNlZAp0byB3ZWlnaCB1cG9uIGhpbS4iSmUgaGFkIGdpdmVuIHVwIGF0dGVu
ZGluZyB0byBtYXR0ZXJzIG9mIHByYWN0aWNlbCBpbXBvcnRhbmNlOwpoZQBoYWQgbG9zdCBhbGwg
ZGVzaXLlIHRvIGRvIHNvLiBOb3RoYW5nIHRoYXQgYW55IGxhbmRsYWR5IGNvdWxkIGxvIGhBZCBh
IHJlYWwKdGVycm9yIGZvciBoaS0uIEJ1dCB0byBiZSBzdG9wcGVkIG9uIHRoZSBzdGFpcnMsIHRv
IGJlIGZvcmNlZCB0byBsaXN0ZW4gdG8gaGVyCnRyaHZpYWwsIGlycmVuZX5hLnQgZ29zc2lwLCB0
byBwZXN0ZXJpbmcgZGVtQW5kcyBmbVAgcGF5bWVudCwgdGhyZWF0cyBhbGQKY29tcGxhaW50cywg
YW5kIHRvIHJhY2sgaGlzIGJyZWlucyBmb3JgZXhj9XNlcywgdG8gcHJldmFyaWNhcGUsIHRnIGxp
ZS1ubywKcmFkaGVyIHRoYW4gdGhhNCwgaGUgd291bGQgY3JlZXAgZG93biB0aGUgc3RhaXJzIGxp
a2UgYSBjYXQgYW5kIHNsaXAgb3VUIHVuc21lbi4KCglUaGlzIGV2ZW5pbmcsIGhvd2V2ZXIsIG9u
IGNvbWluZyBvdXYg6W50byB0YGUgc3RyZWVkLCBoZSBiZWNhbWUgYWN0dGVseQphd2FyZSBvZmRs
aXMgZmVh8ncuCgoJIkkgd2FudCB0byBhdHRlbXB0IGEgdGhpbmcgbGlrZSB06GF0IGFuZCBhbSBm
cmlnaHRlbmVkIGJ5IHRoZXNlIHRyaWZsZXMsIgpoZSB0aG91J2h0LCB3aXRoIGFvIG9kZCBzbWls
ZS4gIkhtLi4uIHllcywwYWxtIGlzIGluIGEgLWFuJnMgaHFuZHMgYW9kIGhnIGxldHMKaXQgYWxs
IHNsaXAgZnJvbSBjb3dhcmRpY2UsIHRoYfQn8yBhbiBheGlvbS4gSXQgd291bGQgYmUgaW50bXJl
c3RpbmcgdG8ga25vdwp3aGF0AGn0IGlzIG9lbiBhcmUgbW9zdCBhZnJhaWQgb2YuIFRha2luZyBh
IG5ldyBzdGVwLCB1dHRlcmluZyBgIG5ldyB3b3JkIGlzCndoYXQgdGgleSRmZWFyoG1vc3QuLi4u
IEJ1dCBLIGFtIFBpbGtpbmcgdG9vIG11Y2AuIEl2I3MgYmVjYXVzZSBJIGNoYXRwZXIgdGhhdApJ
IGRvIG5vdGhpbmcuYE/yIHBlcmhhcHMgaXQgaXMgdGhhdCBJIGNoYXR8ZXIgYmRjYXVzbSBJIGRv
IG5vdGhpbmcuIEkndmUgbGVhcm5lZAp0byBjaGF0dG1yIHRoaXMgbGFzdCBtb250aCwgbHlpbmcg
Zm9yIGRheXMgdG1HZXRoZXIgaW4gLXkwZGVuIHRoaX5raW5nLi4uIG9GCkphY2ogdGhlIEcpYW50
LWvpbGxlci4gV2h5AGFtIEkgZ29pbGcgdGhlcmUgbm92PyBBbSBJIGNhcCFibGUgT2YgdGhldD8g
SXMAdGhgZApzZXJpb3VzPyBJdCBpcyBub3Qgc2VyaW91cyBhdCBhZGwuIEl0J3Mgc2ltcGx5IGEh
RmFudGFzeSB0byBhbXVzZSBteXNlbGY6IGEKeGxheXToaW5nISBZZXMsIG1heeJ1IGl0IGhxIHEg
cGxheXZpaX5nLiIK`),
char => char.charCodeAt(0));
