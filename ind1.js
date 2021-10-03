const input = [
  { id: 1, name: "name1", parentId: null },
  { id: 2, name: "name2", parentId: null },
  { id: 3, name: "name3", parentId: 1 },
  { id: 4, name: "name4", parentId: 1 },
  { id: 5, name: "name5", parentId: 3 },
  { id: 6, name: "name6", parentId: 4 },
  { id: 7, name: "name7", parentId: 5 },
  { id: 8, name: "name8", parentId: 6 },
  { id: 9, name: "name9", parentId: 8 },
  { id: 10, name: "name10", parentId: 8 },
  { id: 11, name: "name11", parentId: null },
  { id: 12, name: "name12", parentId: 2 },
  { id: 13, name: "name13", parentId: 2 },
  { id: 14, name: "name14", parentId: null },
];

function makeTree(nodes, parentId) {
  return nodes
    .filter((node) => node.parentId === parentId)
    .reduce(
      (tree, node) => [
        ...tree,
        {
          ...node,
          children: makeTree(nodes, node.id),
        },
      ],
      []
    );
}

console.log(makeTree(input, null));
