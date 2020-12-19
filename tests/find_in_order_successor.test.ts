// https://www.youtube.com/watch?v=jma9hFQSCDk

describe('Find in Order Successor', () => {
    interface MyNode {
        left?: MyNode;
        right?: MyNode;
        value: number;
    }

    const data: MyNode = {
        value: 20,
        left: {
            value: 9,
            left: { 
                value: 5, 
            },
            right: {
                value: 12,
                left: {
                    value: 11
                },
                right: {
                    value: 14
                }
            }
        },
        right: {
            value: 25 
        },
    }

    function findSucecessor(root: MyNode, value: number) : MyNode {
        let closest = { value: Number.MAX_VALUE }

        function findNode(node: MyNode, value: number): MyNode {
            if (!node) {
                return null
            }

            if (node.value > value && node.value < closest.value) {
                closest = node
            }

            findNode(node.left, value)
            findNode(node.right, value)
        }

        findNode(root, value)

        return closest
    }

    test('find successor to 9', () => {
        expect(findSucecessor(data, 9).value).toEqual(11)
    })

    test('find successor to 11', () => {
        expect(findSucecessor(data, 11).value).toEqual(12)
    })

    test('find successor to 14', () => {
        expect(findSucecessor(data, 14).value).toEqual(20)
    })
});
