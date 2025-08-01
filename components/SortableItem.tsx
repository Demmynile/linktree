"use client"

import { Id } from "@/convex/_generated/dataModel"
import { Doc } from "@/convex/_generated/dataModel"
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import { BarChart, Check, GripVertical, Pencil, Trash2, X } from "lucide-react";
import { Button } from "./ui/button";
import Link from "next/link";
import { useState, useTransition } from "react";
import { Input } from "./ui/input";
import { api } from "@/convex/_generated/api";
import { useMutation } from "convex/react";
import { toast } from "sonner";

function SortableItem({ id, link }: { id: Id<"links">; link: Doc<"links"> }) {
    const {attributes , listeners , setNodeRef , transform , transition} = useSortable({id})


    const [isEditing, setIsEditing] = useState(false)
    const [editTitle, setEditTitle] = useState(link?.title);
    const [editUrl, setEditUrl] = useState(link?.url);
    const [isUpdating, startTransition] = useTransition();
    
    const style = {
        transform : CSS.Transform.toString(transform),
        transition
    }
    const handleCancel = () => {
        setIsEditing(false);
        setEditTitle(link.title);
        setEditUrl(link.url);
    }

    const deleteLink = useMutation(api.lib.links.deleteLink)
    const updateLink = useMutation(api.lib.links.updateLink)

    const handleSave = async() => {
      if(!editTitle?.trim() || !editUrl.trim()) return;
      startTransition(async() => {
           try {
        let processedUrl = editUrl;
        if(
          !processedUrl.startsWith("http://") &&
          !processedUrl.startsWith("https://")
        ){
          processedUrl = `https://${processedUrl}`;
        }
        await updateLink({
          linkId: id,
          title: editTitle.trim(),
          url: processedUrl,
        });
        setIsEditing(false);

        toast.success("Link updated successfully")
      }
        catch (error) {
        console.error("Failed to update link:", error);
      }
      
      })
    }

    if(!link) return null;

  return (
    <div 
    ref={setNodeRef}
    style={style} 
    className="p-4 border border-gray-200 rounded-lg bg-white shadow-sm
    hover:shadow-md transition-shadow"
    >
      {isEditing ? (
        <div className="space-y-3">
          <div className="space-y-2">
            <Input 
            value={editTitle}
            onChange={(e) => setEditTitle(e.target.value)}
            placeholder="Edit link title"
            className="font-semibold"            
            />
             <Input 
            value={editUrl}
            onChange={(e) => setEditUrl(e.target.value)}
            placeholder="https://example.com"
            className="text-sm"            
            />
          </div>
          <div className="flex gap-2 justify-end">
            <Button 
            variant="outline"
            size = "sm"
            onClick={handleCancel}
            disabled={isUpdating}
            >
              <X className="w-4 h-4" />
            </Button>
            <Button
            size="sm"
            onClick ={handleSave}
            disabled={isUpdating || !editTitle.trim() || !editUrl.trim()}
            >
              {isUpdating ? (

               <span className="w-4 h-4 animate-spin border-2 border-white border-t-transparent rounded-full"/>
              ) : (
                <Check className="w-4 h-4" />
              )}
            </Button>
          </div>


        </div>
      ) : (
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
      )}

      
    </div>
  )
}
export default SortableItem