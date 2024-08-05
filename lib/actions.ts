export const createUser = async (data:any) => {
    const res = await fetch("/api/user", {
        method: "POST",
        body: data
    })
}