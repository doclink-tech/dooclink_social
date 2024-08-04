import React from 'react'
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const ImageNav = () => {
  return (
    <div className="flex justify-between items-center mb-6 mt-16">
          <h2 className="text-2xl font-bold text-gray-800">Images</h2>
          <div className="flex items-center gap-x-2">
            <Input
              type="text"
              placeholder="Search..."
              className="border rounded-lg px-3 py-2 mr-4 focus:outline-none focus:ring-2 focus:ring-gray-300"
            />
            <Select>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Sort by follower" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="light">Newest</SelectItem>
                <SelectItem value="dark">Oldest</SelectItem>
                <SelectItem value="system">System</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
  )
}

export default ImageNav