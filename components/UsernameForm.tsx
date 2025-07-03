import React from 'react'
import { z } from 'zod';

 const formSchema = z.object({  
        username: z
            .string()
            .min(3, "Username must be at least 3 characters long")
            .max(30, "Username must be at most 20 characters long")
            .regex(/^[a-zA-Z0-9_]+$/, 
              "Username can only contain letters, numbers, and underscores"
            )
    })


  
function UsernameForm() {
  <div>
    UsernameForm
  </div>
}

export default UsernameForm