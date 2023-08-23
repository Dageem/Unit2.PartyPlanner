const url =
  "https://fsa-crud-2aa9294fe819.herokuapp.com/api/2307-CPU-RM-WEB-PT/events";
// GET
async function myFunction() {
  const response = await fetch(url);
  const data = await response.json();
  console.log(data);
}

myFunction();

// // POST
async function postevent() {
    await fetch(url, {
        method: "POST",
        body: {
            id: 1,
            name: "Event Name",
            description: "This is a description of the event.",
            date: "2021-09-30T00:00:00.000Z", // Date ISO string
            location: "123 Street"
        },
      })
        .then((res) => res.json())
        .then((data) => console.log(data));
      
}

postevent()

// Delete
async function deleteevent(id) {
    const response= await fetch(url+"/"+id, {
        method: "DELETE"
    })
    const deleteparty= await response.json();
    return deleteparty
}

deleteevent(15)