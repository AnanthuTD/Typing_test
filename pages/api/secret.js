export default async function handler(req, res) {
    if (req.method === 'POST') {
      let data = undefined
        await fetch(`${process.env.API}/users`,{method:'POST'}).then(async (response)=>{
          data= await response.json()
         console.log(data);
        })
        res.json(data)
      } else {
        // Handle any other HTTP method
      }
  }