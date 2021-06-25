import { useState } from "react";

import AddressBox from "./AddressBox";
import BranchGallery from "./BranchGallery";

const branches = [
  {
    id: "b1",
    name: "Nizami",
    address: "Mirzağa Əliyev küç. 138",
    hours: "11:00-23:00",
    images: [
      "assets/img/restaurants/nizami/nizami1.jpg",
      "assets/img/restaurants/nizami/nizami2.jpg",
      "assets/img/restaurants/nizami/nizami3.jpg",
      "assets/img/restaurants/nizami/nizami4.jpg",
      "assets/img/restaurants/nizami/nizami5.jpg"
    ],
  },
  {
    id: "b2",
    name: "Sahil",
    address: "Nizami küç. 106A",
    hours: "11:00-23:00",
    images: ['assets/img/restaurants/sahil/sahil1.jpg',
    'assets/img/restaurants/sahil/sahil2.jpg',
    'assets/img/restaurants/sahil/sahil3.jpg',
    'assets/img/restaurants/sahil/sahil4.jpg',
    'assets/img/restaurants/sahil/sahil5.jpg',
    'assets/img/restaurants/sahil/sahil6.jpg']
  },
  {
    id: "b3",
    name: "Gənclik",
    address: "Atatürk pr. 29",
    hours: "11:00-23:00",
    images: ['assets/img/restaurants/ganjlik/ganjlik1.jpg',
    'assets/img/restaurants/ganjlik/ganjlik2.jpg',
    'assets/img/restaurants/ganjlik/ganjlik3.jpg',
    'assets/img/restaurants/ganjlik/ganjlik4.jpg']
  },
  {
    id: "b4",
    name: "Əcəmi",
    address: "Cavadxan küç. 15c",
    hours: "11:00-06:00",
    // images: ['assets/img/restaurants/adjami/adjami1.jpg',
    // 'assets/img/restaurants/adjami/adjami2.jpg',
    // 'assets/img/restaurants/adjami/adjami3.jpg',
    // 'assets/img/restaurants/adjami/adjami4.jpg',
    // 'assets/img/restaurants/adjami/adjami5.jpg']
  },
];

function Branches() {
  const [activeBranch, setActiveBranch] = useState(branches[0]);

  function changeActiveBranchHandler(branch) {
    setActiveBranch(branch);
  }

  return (
    <div className="branches">
      {branches.map((branch) => {
        return (
          <AddressBox
            key={branch.id}
            branch={branch}
            activeBranch={activeBranch}
            onChangeBranch={changeActiveBranchHandler}
          />
        );
      })}
      <div className="branches__gallery">
        <BranchGallery branch={activeBranch} />
      </div>
    </div>
  );
}

export default Branches;
