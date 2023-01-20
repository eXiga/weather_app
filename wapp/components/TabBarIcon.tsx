import { AntDesign } from "@expo/vector-icons";

type TabBarIconName = keyof typeof AntDesign.glyphMap;

interface TabBarIconProps {
  route: string;
  focused: boolean;
  size: number;
  activeColor: string;
  inactiveColor: string;
}

export default function TabBarIcon(props: TabBarIconProps) {
  let iconName: TabBarIconName;
  if (props.route === "Home") {
    iconName = "home";
  } else if (props.route === "Settings") {
    iconName = "swap";
  } else if (props.route === "Favorites") {
    iconName = "hearto";
  } else {
    iconName = "meh";
  }

  return (
    <AntDesign
      name={iconName}
      size={props.size}
      color={props.focused ? props.activeColor : props.inactiveColor}
    />
  );
}
