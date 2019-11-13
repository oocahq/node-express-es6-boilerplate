export const getHelloWorldText = async () => 'Hello World'
export const getLongRunHelloWorldText = () => new Promise((resolve) => setTimeout(() => resolve('Hello World'), 5000))

export default { getHelloWorldText, getLongRunHelloWorldText }
