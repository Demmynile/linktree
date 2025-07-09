"use client";

import { api } from "@/convex/_generated/api";
import { Preloaded, useMutation, usePreloadedQuery } from "convex/react";
import { useMemo, useState } from "react";
import {
closestCenter,
DndContext,
DragEndEvent,
KeyboardSensor,
PointerSensor,
useSensor,
useSensors
} from "@dnd-kit/core"
import {
    arrayMove,
    SortableContext,
    sortableKeyboardCordinates,
    verticalListSortingStrategy
} from "@dnd-kit/sortable"

function ManageLinks({preloadedLinks}: {
    preloadedLinks : Preloaded<typeof api.lib.links.getLinksByUserId>;
}) {
    const links = usePreloadedQuery(preloadedLinks)
    const updateLinkOrder = useMutation(api.lib.links.updateLinkOrder)

    const [items , setItems] = useState(links.map((link) => link._id))

    const sensors = useSensors(
        useSensor(PointerSensor),
        useSensor(KeyboardSensor , {
            coordinateGetter: sortableKeyboardCordinates
        })
    )
    // create a link map
    const listMap = useMemo(() => {
        return Object.fromEntries(links.map((link) => [link._id, link])
        )
    }, [links])

  return (
    <div>ManageLinks</div>
  )
}

export default ManageLinks