"use client"

import { Id } from "@/convex/_generated/dataModel"
import { Doc } from "@/convex/_generated/dataModel"
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import { BarChart, GripVertical, Pencil, Trash2 } from "lucide-react";
import { Button } from "./ui/button";
import Link from "next/link";

function SortableItem({ id, link }: { id: Id<"links">; link: Doc<"links"> }) {
    const {attributes , listeners , setNodeRef , transform , transition} = useSortable({id})

    const style = {
        transform : CSS.Transform.toString(transform),
        transition
    }
  return (
    <div ref={setNodeRef} style={style}>
      <div className="flex items-center gap-3">
        <div
        {...attributes}
        {...listeners}
        aria-describedby={`link-${id}`}
        className="cursor-move p-1 hover:bg-gray-100 rounded flex-shrink-0"
        >
            <GripVertical  className="w-4 h-4 text-gray-400"/>
        </div>

         {/* Content */}
         <div className="flex-1 min-w-0 pr-3">
            <h3 className="font-semibold text-lg truncate">{link.title}</h3>
            <p className="text-gray-600 text-sm truncate">{link.url}</p>
         </div>
        {/* Action Buttons */}
        <div className="flex items-center gap-1 flex-shrink-0">
            {/* Analytics Button */}
            <Button
            variant = 'outline'
            size='icon'
            className="w-8 h-8"
            asChild
            >
                <Link
                href={`/dashboard/link/${id}`}
                >
                <BarChart className="w-3.5 h-3.5 text-green-500"  />
                
                </Link>
            </Button>
            {/* Edit Button */}
            <Button
            variant="outline"
            size = "icon"
            className="h-8 w-8"
            onClick = {() => {
                setIsEditing(true)
            }}
            >
             <Pencil className="w-3.5 h-3.5" />
            </Button>

             {/* Delete Button */}
             <Button
             variant="destructive"
             size = "icon"
             className="h-8 w-8"
             onClick= {(e) => {
                e.stopPropagation();

                const isConfirmed = confirm(
                    `Are you sure you want delete "${link.title}"/\n\nThis action cannot be undone.`,

                );
                if(isConfirmed) {
                    deleteLink({linkId : id})
                }
             }}
             
             >
              <Trash2 className="w-3.5 h-3.5" />
             </Button>
        </div>

      </div>
    </div>
  )
}
export default SortableItem