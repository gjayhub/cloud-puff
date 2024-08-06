"use client";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

import React, { ReactNode, useState } from "react";

import usePaginationStore from "@/lib/store/PaginationStore";
import useProduct from "@/lib/store/ProductStore";

export default function PaginationComponent() {
  const { setEnd, setStart, start, end, itemsPerPage } = usePaginationStore();
  const { productList } = useProduct();
  return (
    <Pagination>
      <PaginationContent>
        <PaginationItem>
          <PaginationPrevious
            className={`${start === 0 && "pointer-events-none opacity-50"}`}
            onClick={() => {
              setStart(start - itemsPerPage);
              setEnd(end - itemsPerPage);
            }}
          />
        </PaginationItem>

        <PaginationItem>
          <PaginationNext
            className={`${
              end >= productList.length && "pointer-events-none opacity-50"
            }`}
            onClick={() => {
              setStart(start + itemsPerPage);
              setEnd(end + itemsPerPage);
            }}
          />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
}
