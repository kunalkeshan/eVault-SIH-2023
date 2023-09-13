import Layout from "@/components/layouts/Layout";
import React from "react";
import Link from "next/link";

import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { GetServerSideProps } from "next";
import { parse } from "cookie";

const records = [
  {
    name: "Bankruptcy recommendation ",
    description: "Appeal for bankruptcy recommendation ",
    image:
      "ipfs://bafyreigyzzxhm7impvpaz4refpreefukuc7biuahrpijghqe5yv3eruc2u/metadata.json",
  },
  {
    name: "Case Law Summary EU",
    description: "summary for EU case law ",
    image:
      "ipfs://bafyreihntszzbtghpvlrpiudj5rmqufm3ofy44ndnwzponrpdiuaff2awy/metadata.json",
  },
  {
    name: "Non Disclosure Agreement",
    description: "NDA appeal",
    image:
      "ipfs://bafyreifxuq6vb7u5fxt7fa5kp2ak6pftygmabms5a5wc5efj47cam2veoe/metadata.json",
  },
];

export default function index() {
  return (
    <Layout>
      <div className="max-h-[60vh] overflow-y-auto w-[95vw] md:w-[65vw] border-2 border-neutral-500 mx-auto my-12">
        <Table>
          <TableCaption></TableCaption>
          <TableHeader>
            <TableRow>
              <TableHead className="text-center">Case Name</TableHead>
              <TableHead className="text-center">Case Description</TableHead>
              <TableHead className="text-center">Case File</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {records.map((record) => (
              <TableRow key={record.name}>
                <TableCell className="text-center">{record.name}</TableCell>
                <TableCell className="text-center">
                  {record.description}
                </TableCell>
                <TableCell className="text-center">
                  <Link
                    href={record.image}
                    className="px-4 py-2 bg-blue-600 text-white rounded-xl"
                  >
                    View
                  </Link>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </Layout>
  );
}

export const getServerSideProps: GetServerSideProps<{}> = async ({ req }) => {
  const cookies = parse(req.headers.cookie ?? "");
  if (
    !cookies["legal-ledger-access-token"] &&
    !cookies["legal-ledger-refresh-token"]
  ) {
    return {
      props: {},
      redirect: {
        destination: "/auth/login",
        permanent: true,
      },
    };
  }
  return { props: {} };
};
