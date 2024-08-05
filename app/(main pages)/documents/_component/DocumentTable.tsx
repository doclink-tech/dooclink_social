"use client";

import Image from "next/image";
import { redirect } from "next/navigation";
import { useEffect } from "react";

import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { DownloadCloud } from "lucide-react";
import { MdDeleteOutline } from "react-icons/md";

export function DataTable() {
  return (
    <div className="data-table">
      <Table className="shad-table">
        <TableHeader className="bg-gray-100">
          <TableRow className="shad-table-row-header">
            <TableHead>Sr. no</TableHead>
            <TableHead>File Name</TableHead>
            <TableHead>File Type</TableHead>
            <TableHead>Date</TableHead>
            <TableHead>Sizes</TableHead>
            <TableHead>Author</TableHead>
            <TableHead>Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow className="shad-table-row">
            <TableCell>1</TableCell>
            <TableCell>Rules Post</TableCell>
            <TableCell>Document</TableCell>
            <TableCell>Jan 21, 2019</TableCell>
            <TableCell>800kb</TableCell>
            <TableCell>Jan Marshal</TableCell>
            <TableCell>
              <div className="flex flex-row gap-x-2">
                <Button size="icon">
                  <DownloadCloud />
                </Button>
                <Button size="icon" variant="outline1">
                  <MdDeleteOutline className="h-5 w-5 text-red-300" />
                </Button>
              </div>
            </TableCell>
          </TableRow>
          <TableRow className="shad-table-row">
            <TableCell>1</TableCell>
            <TableCell>Rules Post</TableCell>
            <TableCell>Document</TableCell>
            <TableCell>Jan 21, 2019</TableCell>
            <TableCell>800kb</TableCell>
            <TableCell>Jan Marshal</TableCell>
            <TableCell>
              <div className="flex flex-row gap-x-2">
                <Button size="icon">
                  <DownloadCloud />
                </Button>
                <Button size="icon" variant="outline1">
                  <MdDeleteOutline className="h-5 w-5 text-red-300" />
                </Button>
              </div>
            </TableCell>
          </TableRow>
          <TableRow className="shad-table-row">
            <TableCell>1</TableCell>
            <TableCell>Rules Post</TableCell>
            <TableCell>Document</TableCell>
            <TableCell>Jan 21, 2019</TableCell>
            <TableCell>800kb</TableCell>
            <TableCell>Jan Marshal</TableCell>
            <TableCell>
              <div className="flex flex-row gap-x-2">
                <Button size="icon">
                  <DownloadCloud />
                </Button>
                <Button size="icon" variant="outline1">
                  <MdDeleteOutline className="h-5 w-5 text-red-300" />
                </Button>
              </div>
            </TableCell>
          </TableRow>
          <TableRow className="shad-table-row">
            <TableCell>1</TableCell>
            <TableCell>Rules Post</TableCell>
            <TableCell>Document</TableCell>
            <TableCell>Jan 21, 2019</TableCell>
            <TableCell>800kb</TableCell>
            <TableCell>Jan Marshal</TableCell>
            <TableCell>
              <div className="flex flex-row gap-x-2">
                <Button size="icon">
                  <DownloadCloud />
                </Button>
                <Button size="icon" variant="outline1">
                  <MdDeleteOutline className="h-5 w-5 text-red-300" />
                </Button>
              </div>
            </TableCell>
          </TableRow>
          <TableRow className="shad-table-row">
            <TableCell>1</TableCell>
            <TableCell>Rules Post</TableCell>
            <TableCell>Document</TableCell>
            <TableCell>Jan 21, 2019</TableCell>
            <TableCell>800kb</TableCell>
            <TableCell>Jan Marshal</TableCell>
            <TableCell>
              <div className="flex flex-row gap-x-2">
                <Button size="icon">
                  <DownloadCloud />
                </Button>
                <Button size="icon" variant="outline1">
                  <MdDeleteOutline className="h-5 w-5 text-red-300" />
                </Button>
              </div>
            </TableCell>
          </TableRow>
          <TableRow className="shad-table-row">
            <TableCell>1</TableCell>
            <TableCell>Rules Post</TableCell>
            <TableCell>Document</TableCell>
            <TableCell>Jan 21, 2019</TableCell>
            <TableCell>800kb</TableCell>
            <TableCell>Jan Marshal</TableCell>
            <TableCell>
              <div className="flex flex-row gap-x-2">
                <Button size="icon">
                  <DownloadCloud />
                </Button>
                <Button size="icon" variant="outline1">
                  <MdDeleteOutline className="h-5 w-5 text-red-300" />
                </Button>
              </div>
            </TableCell>
          </TableRow>
          <TableRow className="shad-table-row">
            <TableCell>1</TableCell>
            <TableCell>Rules Post</TableCell>
            <TableCell>Document</TableCell>
            <TableCell>Jan 21, 2019</TableCell>
            <TableCell>800kb</TableCell>
            <TableCell>Jan Marshal</TableCell>
            <TableCell>
              <div className="flex flex-row gap-x-2">
                <Button size="icon">
                  <DownloadCloud />
                </Button>
                <Button size="icon" variant="outline1">
                  <MdDeleteOutline className="h-5 w-5 text-red-300" />
                </Button>
              </div>
            </TableCell>
          </TableRow>
          <TableRow className="shad-table-row">
            <TableCell>1</TableCell>
            <TableCell>Rules Post</TableCell>
            <TableCell>Document</TableCell>
            <TableCell>Jan 21, 2019</TableCell>
            <TableCell>800kb</TableCell>
            <TableCell>Jan Marshal</TableCell>
            <TableCell>
              <div className="flex flex-row gap-x-2">
                <Button size="icon">
                  <DownloadCloud />
                </Button>
                <Button size="icon" variant="outline1">
                  <MdDeleteOutline className="h-5 w-5 text-red-300" />
                </Button>
              </div>
            </TableCell>
          </TableRow>
          <TableRow className="shad-table-row">
            <TableCell>1</TableCell>
            <TableCell>Rules Post</TableCell>
            <TableCell>Document</TableCell>
            <TableCell>Jan 21, 2019</TableCell>
            <TableCell>800kb</TableCell>
            <TableCell>Jan Marshal</TableCell>
            <TableCell>
              <div className="flex flex-row gap-x-2">
                <Button size="icon">
                  <DownloadCloud />
                </Button>
                <Button size="icon" variant="outline1">
                  <MdDeleteOutline className="h-5 w-5 text-red-300" />
                </Button>
              </div>
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
      <div className="table-actions">
        <Button variant="outline" size="sm" className="shad-gray-btn">
          <Image
            src="/assets/icons/arrow.svg"
            width={24}
            height={24}
            alt="arrow"
          />
        </Button>
        <Button variant="outline" size="sm" className="shad-gray-btn">
          <Image
            src="/assets/icons/arrow.svg"
            width={24}
            height={24}
            alt="arrow "
            className="rotate-180"
          />
        </Button>
      </div>
    </div>
  );
}
