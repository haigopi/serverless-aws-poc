import { RequestParams } from "@elastic/elasticsearch";

export function getESMappings(index: string): RequestParams.IndicesCreate {
  return {
    index,
    body: {
      properties: {
        id: { type: "text" },
        name: { type: "text" },
        link: { type: "text" },
        addedAt: { type: "date" },
        addedBy: { type: "text" },
        tags: { type: "text" },
      },
    },
  };
}

