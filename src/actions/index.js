export const logInData = (data) => {
    return {
        type: 'LOGIN',
        goData: data
    }
}

export const allData = () => {
    return {
        type: "ALLDATA"
    }
}