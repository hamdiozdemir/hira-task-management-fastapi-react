import React from "react"
import { Avatar } from "@chakra-ui/react"
import { BaseTask } from "../../client/types.gen"


const Avatar = ({ task }: { task: BaseTask }) => {
    return (
        <Avatar.Root key={task.assigned_to.id} size="2xs" colorPalette="blue">
            <Avatar.Fallback name={task.assigned_to.full_name ?? "N/A"} />
            <Avatar.Image src="" />
        </Avatar.Root>
    )
}

export default Avatar;
