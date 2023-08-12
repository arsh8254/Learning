import React from "react";
import Entry from "./Entry";
import emojipedia from "../emojipedia";

// Steps:
// 1) Extract the repeated parts of the App into a Entry component.
// 2) Use props to make the Entry component render different data.
// 3) Import the emojipedia constant.
// 4) Map through the emojipedia array and render Entry components.

// Emojipedia has 3 entries, so createEntry gets called 3 times.
// Each time, it passes 1 item from the emojipedia array as a var called emojiTerm.
// Each time it sends one javascript object to the map function and loop continues till last object

// var emojiTerm = {
//   id: 1,
//   emoji: "💪",
//   name: "Tense Biceps",
//   meaning:
//     "“You can do that!” or “I feel strong!” Arm with tense biceps.
// }

function createEntry(emojiTerm) {
  return (
    <Entry
      key={emojiTerm.id}
      emoji={emojiTerm.emoji}
      name={emojiTerm.name}
      description={emojiTerm.meaning}
    />
  );
}

function App() {
  return (
    <div>
      <h1>
        <span>emojipedia</span>
      </h1>
      <dl className="dictionary">{emojipedia.map(createEntry)}</dl>
    </div>
  );
}

export default App;
