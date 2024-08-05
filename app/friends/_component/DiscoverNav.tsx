import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import React from 'react'
import { FaFilter } from 'react-icons/fa'

const DiscoverNav = () => {
  return (
    <div className="flex justify-between items-center mb-4">
          <h1 className="text-2xl font-bold">Friends List</h1>
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <span className="text-sm text-gray-600">Sort by:</span>
              <Select>
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Select filter" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="light">Newest</SelectItem>
                  <SelectItem value="dark">Oldest</SelectItem>
                  <SelectItem value="system">System</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <button className="p-2 ">
              <FaFilter className="text-muted-foreground" />
            </button>
          </div>
        </div>
  )
}

export default DiscoverNav