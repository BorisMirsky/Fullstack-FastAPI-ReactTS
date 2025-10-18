


export const getAllEmployees = async () => {
    const response = await fetch("http://127.0.0.1:8000/allEmployees", {
        headers: {
            'Content-type': 'application/json',
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Headers": "Content-Type",
            "Access-Control-Allow-Methods": 'GET',
        },
        method: 'GET',
        mode: 'cors'
    })
        .then(response => {
            if (!response.ok) {
                throw new Error("Not response", { cause: response });
            }
            else {
                return response.json();
            }
        })
        .then(data => {
            return data;
        })
        .catch(function (err) {
            console.log('Error: ', err);
        });
    return response;
};


