import { TouchableOpacity, Dimensions } from "react-native";

const week_days = 7
const screen_horizontal_padding = (32 * 2) / 5

export const DAY_MARGIN_BETWEEN = 8
export const DAY_SIZE = (Dimensions.get("screen").width / week_days) - (screen_horizontal_padding + 5)

export function HabitDay() {
    return (
        <TouchableOpacity
            className="bg-zinc-900 rounded-lg border-2 m-1 border-zinc-800"
            style={{ width: DAY_SIZE, height: DAY_SIZE }}
            activeOpacity={0.7}
        />
    )
}