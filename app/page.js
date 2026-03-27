import React, { useState } from "react";

const drivers = [
{ name: "Ben Dickens" },
{ name: "Dan Vitale" },
{ name: "Matthew Quinton" },
{ name: "Paul R Chaloner" },
{ name: "Anders Haglund" },
{ name: "Brad Garlotte" },
{ name: "Cooper M Ross" },
{ name: "Braydyn Suderman" },
{ name: "Andrew Nesland" },
{ name: "Tim Peterson Jr" },
{ name: "Charlie Douglass" },
{ name: "Justin Thompson" },
];

export default function Home() {
const [selected, setSelected] = useState(null);

if (selected) {
return (
<div style={{ padding: 20, background: "#000", color: "#fff", minHeight: "100vh" }}>
<button onClick={() => setSelected(null)}>← Back</button> <h1>{selected.name}</h1> <p>Driver profile coming soon...</p> </div>
);
}

return (
<div style={{ background: "#000", color: "#fff", minHeight: "100vh", textAlign: "center", padding: 20 }}>
<h1 style={{ fontSize: 50 }}>M.U.R.D.E.R</h1> <p>Mostly Unhinged Racing Drivers Endurance Racing</p>

```
  <h2 style={{ marginTop: 40 }}>Drivers</h2>
  {drivers.map((d, i) => (
    <div key={i} onClick={() => setSelected(d)} style={{ margin: 10, cursor: "pointer" }}>
      {d.name}
    </div>
  ))}

  <h2 style={{ marginTop: 40 }}>Team ENDURE</h2>
  <p>Coming Soon</p>
</div>
```

);
}
