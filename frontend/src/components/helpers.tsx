import React from "react"
import { Icon } from "@chakra-ui/react"
import { TaskCategory } from "../client/types.gen"
import { FaListOl } from "react-icons/fa6";
import { RiAdvertisementFill } from "react-icons/ri";
import { GrCompliance } from "react-icons/gr";
import { TbHeartRateMonitor } from "react-icons/tb";
import { FaReact } from "react-icons/fa";
import { FaQuestionCircle } from "react-icons/fa";

import { PiCellSignalLowFill } from "react-icons/pi";
import { PiCellSignalMediumFill } from "react-icons/pi";
import { PiCellSignalFullFill } from "react-icons/pi";
import { BsFire } from "react-icons/bs";


export const icons = {
  list: FaListOl,
  advert: RiAdvertisementFill,
  compliance: GrCompliance,
  monitor: TbHeartRateMonitor,
  ui: FaReact,
  other: FaQuestionCircle,
  signal_low: PiCellSignalLowFill,
  signal_medium: PiCellSignalMediumFill,
  signal_full: PiCellSignalFullFill,
  fire: BsFire,
}

type PriorityName = keyof typeof icons;

export const GetIcon: React.FC<{ name: string, color: string, size: string }> = ({ name, color, size }) => {
  const IconComponent = icons[name as PriorityName];

  if (!IconComponent) {
    return <FaQuestionCircle color={color} size={size} />; // fallback
  }

  return <IconComponent color={color} size={size} />;
};



export const ColorScheme = [
  {
    label: "Gray",
    value: "gray",
  },
  {
    label: "Blue",
    value: "blue",
  },
  {
    label: "Yellow",
    value: "yellow",
  },
  {
    label: "Green",
    value: "green",
  },
  {
    label: "Red",
    value: "red",
  },
  {
    label: "Orange",
    value: "orange",
  },
  {
    label: "Purple",
    value: "purple",
  },
  {
    label: "Pink",
    value: "pink",
  },
  {
    label: "Black",
    value: "black",
  },
  
]
