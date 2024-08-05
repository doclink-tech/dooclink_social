import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import Image from 'next/image'
import React from 'react'

const DocumentNav = () => {
  return (
    <div className="flex justify-between items-center mb-6 mt-16">
          <h2 className="text-2xl font-bold text-gray-800">Files</h2>
          <div className="flex items-center gap-x-2">
            <Input
              type="text"
              placeholder="Search..."
              className="border rounded-lg px-3 py-2 mr-4 focus:outline-none focus:ring-2 focus:ring-gray-300"
            />
            <Button variant="outline" size='sm'>
            <Image
            src="/assets/icons/arrow.svg"
            width={24}
            height={24}
            alt="arrow "
            className="rotate-90"
          />
          Upload
            </Button>
          </div>
        </div>
  )
}

export default DocumentNav