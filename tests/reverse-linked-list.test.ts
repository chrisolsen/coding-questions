interface MyNode {
    value: number;
    next: MyNode;
}

function reverse(node: MyNode): MyNode {
    let lastNode: MyNode = null;
    let currentNode: MyNode = node;
    while(currentNode !== null) {
        const temp = currentNode.next;
        currentNode.next = lastNode;
        lastNode = currentNode;
        currentNode = temp;
    }

    return lastNode;
}
it('should pass', () => {
    const d: MyNode = { value: 4, next: null};
    const c: MyNode = { value: 3, next: d};
    const b: MyNode = { value: 2, next: c};
    const a: MyNode = { value: 1, next: b};

    reverse(a)

    expect(a.next).toBeNull();
    expect(b.next).toBe(a);
    expect(c.next).toBe(b);
    expect(d.next).toBe(c);
})
