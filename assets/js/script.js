const searchForm = document.querySelector('#search-form')
const qInput = document.querySelector('#q');
const videosList = document.getElementById('videos');

let wikiHandleSearch = async function (event) {
    event.preventDefault();
    let q = qInput.value.trim();
    
    if (!q) {
        return;
    }
    let testURL = 'https://en.wikipedia.org/w/api.php?action=query&origin=*&format=json&prop=pageimages%7Cpageterms&titles=Albert%20Einstein&formatversion=2'
    let url = 'https://en.wikipedia.org/w/api.php?action=query&format=json&gsrlimit=15&generator=search' +
    '&origin=*' + // <-- this is the magic ingredient!
    '&gsrsearch='+ q
        let response = await fetch( url,
          {
              headers: {
                 'Access-Control-Allow-Origin': '*',
                  'Authorization': 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiI0ZWM2MmI1N2NiZDYwOWFhOTg1ZDUwNjBmMWI5NDU1OCIsImp0aSI6IjRhZWQ1MmZkNzc0M2E4YTlmNmMyODc4YjAzMmQ2YWJjODhiZDM5YjhjNWMzNTc2MjM3M2ExODI3OTBmMWFiNjAzYTk4ZTQxODQzZGM1Mjk3IiwiaWF0IjoxNjc5NDk3OTkzLjA5NDk5OSwibmJmIjoxNjc5NDk3OTkzLjA5NTAwMiwiZXhwIjozMzIzNjQwNjc5My4wOTM0NDUsInN1YiI6IjcyMzQ0MDYwIiwiaXNzIjoiaHR0cHM6Ly9tZXRhLndpa2ltZWRpYS5vcmciLCJyYXRlbGltaXQiOnsicmVxdWVzdHNfcGVyX3VuaXQiOjUwMDAsInVuaXQiOiJIT1VSIn0sInNjb3BlcyI6WyJiYXNpYyJdfQ.lJDcgHBRtG3Uy5f6G1eDpCpYRW-ZQBg-0p7I-qgPOcpdD1lpEMZiCfgudPs1L_UHZt16PwRAUCFCK4kxP0MykiZpGus7UuQ2oKZ1oVCwXAUn9v5OJ4wohzYluufdGEfpYCg-00RAmHnteIUuEFslAcPIzyG-tVwRwSIoRDk3FtQs4V8KruuE5NHSBuZVT-e4WeuUVbnXxHjX2xiElyyNMpJBUuCZGV9ci3qmpN1BTQ0DZ3yPZEEfqL_oCoUuTFJuGOWysM6_XQ_-e6S1HLh3EGYUksnSMDBP8eoDlXcg4mrCWyLq6dTMJ4xqlcYfbAklx6rKi-sr_OOIbGDshOFsNuU78e1fU-atmhRpTyif3H7YnZgHmeNwzDHE1RAg3LAUJtamxyML9GJMVtsdyRmLBnNN0uJB1DrM5gc8f6zqtKwjy6OMc_eB9TbL5j0s44jPivUueKLAKbLhFDqC5peGF68QhNqKHaApTgZ-OW-k2WmdBIyXDrTJ1q7l0QLS36LA9vLgnGSGa9dOskspQX5KulhxniJjg8eoLIrmMkqxPnRuiEIP9Ghb7c4cxg6YiGLMPCwR0rdNHb2NTWh-EP1jjrBV6qjPOoZs80tC944Gc6r1MKGzyhlKJiEXBWaaW9NY9tk-YEROKA5ubne3pjCMNFQvqWM_7K8JPYkXBiTrWE4',
                  'Api-User-Agent': 'Group_7_Project (madiscercy@gmail.com)'
              }
          }
      );
  
      response.json()
          .then(console.log).catch(console.error);
      }
//     const baseURL = 'https://en.wikipedia.org/w/api.php?origin=*&action=';
//     const apiURL = baseURL + 'opensearch&search=' + q + '&limit=5&namespace=0&format=json';

//     const wikimediaToken = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiI3NmM1MGQ2M2Q4YmMxZjJlNDdiY2E1OTQ1MzEzNTQ4MiIsImp0aSI6ImVlNDExY2IwMTdhMGQyZjg3ODRhNTJmMDE3ZWVlNDM4ZjliODc1ZWVhNDg3YjhlYzVmNmUwYjdjOGRlNmFkYzBiMDZlY2I2M2Q0ZGY1NmZhIiwiaWF0IjoxNjc5NTAxODA5LjU4OTEwNiwibmJmIjoxNjc5NTAxODA5LjU4OTExLCJleHAiOjMzMjM2NDEwNjA5LjU4NzQ2Nywic3ViIjoiNzIzNDQwNjAiLCJpc3MiOiJodHRwczovL21ldGEud2lraW1lZGlhLm9yZyIsInJhdGVsaW1pdCI6eyJyZXF1ZXN0c19wZXJfdW5pdCI6NTAwMCwidW5pdCI6IkhPVVIifSwic2NvcGVzIjpbImJhc2ljIl19.IVdaPeXOc7JQDTTZKFaD54rR054oFbM3LI1XMAPIkYKkulgF7Udxc--dInha6vxdpAkmfGG3uJjKEWgMn1ckY1TvQ3LCFqPzV5cXCP_hIIE-CDJewF-jJ3tB8shzXLdLjyoUjmMWJfu8DL4IRj8rZ4gn4JmFZIljSEX7Jn4BPKnFHEsxxwrLpaOm3vrNQdJLOxwx_yd-jD4ioaxLFbAlOI5_ltIOkQwQcZeWPqUSourKAzGuYxLqOI6X_c-B45_75na0UCfcSINy9SHTRZK1k0O9d-EKXrjR3nnfCbn9mBfxbtla2mCutnEh_Wx6F2YsgFCtN5xSziUkUQ0fB_heRh_BN1XLqiaIZJcARfMPQSvK98JT_R7nVRO8w_7gEJj1awaw_NSsjAAIbG73-OfP_3qcsbL_LY-_vVspKJfy7drJPPXv2m8Ge_i9X3XJVfo6myB-1ZRzWP0IzdUdmBwycQEA6vJcNoJqMSUo_zLPPMSQkeCppo_oClWq04k7JLcV55aMT4kRQmi9pwSxj0xItlGwQv-5p8s9NNbdeoPoP1vlc2kRSso9X1qGDp3fbXcxs4z3d1xIXQaDp2IyH-98oFEpNFNzRrTxVGncuR5q8hO3LdyLriyBRlociUeDa3n50vvUChWW79BrkNRSrdfU1wqQBWSUOueIygWNnIDsRaE';

//     // let url = `https://api.wikimedia.org/feed/v1/wikipedia/en/featured/2023/03/21`;
//     q = 'lebron_james'
//     let url = 'https://en.wikipedia.org/api/rest_v1/page/summary/' + q 
//     fetch(url, {
//         method: 'GET',
//       headers: {
//         'Authorization': 'Bearer ' + wikimediaToken,
//         'Accept': 'application/json; charset=utf-8; profile="https://www.mediawiki.org/wiki/Specs/mobile-sections/0.14.1"',
//         'User-Agent': 'madiscercy@gmail.com',
//         'Origin': '*' // Replace with your actual app name and version
//       }
//     })
//       .then(response => response.json())
//       .then(data => {
//         console.log(data); 
//         console.log(data.title); 
//         console.log(data.extract);
//       });
// }
 
searchForm.addEventListener('submit', wikiHandleSearch);

var bingOptions = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': '168a4d3a4cmsh9a1eadacaa150cap199683jsn69b0a6c3e172',
        'X-RapidAPI-Host': 'bing-video-search1.p.rapidapi.com'
    }
};

searchForm.addEventListener('submit', function(event) {
    event.preventDefault();
    var q = qInput.value.trim();
    fetch(`https://bing-video-search1.p.rapidapi.com/videos/search?count=5&q=${q}`, bingOptions)
        .then(response => response.json())
        .then(response => {
            videosList.innerHTML = '';
            var videos = response.value;
            console.log(videos)       
        })
        .catch(err => console.error(err));
});