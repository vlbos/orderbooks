# orderbooks




```
curl http://127.0.0.1:7001/info/getCollections

curl -H "Authorization: Bearer your_token" https://example.com

 http://localhost:8000/api/auth/register


curl -H "Content-Type: application/json" -X POST -d '{"name":"lisheng","email":"lisheng2014@qq.com","password":"password123","passwordConfirm":"password123"}' http://localhost:8000/api/auth/register


curl -H "Content-Type: application/json" -X POST -d '{"email":"lisheng2014@qq.com","password":"password123"}' http://localhost:8000/api/auth/login

curl -H "Authorization: Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI2MzRhM2FhNzU0MmM1ZTdkMWQxOWU1YmEiLCJpYXQiOjE2NjU4MDkwNzEsImV4cCI6MTY2NTgwOTk3MX0.WZKvxCm4R8bx3ODOhNRUfQWMPoYNbqclB_1BIGg1vWFnGayCtH6Hd7gU24hpy4_281Q0gjEBZxiAiUIL_SmWwA" http://localhost:8000/api/users/me


curl -H "Authorization: Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI2MzRhMTYzYTc2N2QyZjNmYzA0ZjE5YWIiLCJpYXQiOjE2NjU4MDQxMDQsImV4cCI6MTY2NTgwNTAwNH0.JnBWJ3cf6YaNtuHekhdgdPhMJBujD1a9IpNi2wRqRpf07XngTdorqY_6uUQa8Jt4XmvDEAll5obUejMFanomJA" http://localhost:8000/api/users


curl -H "Content-Type: application/json" -X POST -d '{"name":"lisheng","email":"lisheng2014@qq.com","password":"password123","passwordConfirm":"password123"}' http://localhost:8761/wyvern/v1/orders/post

curl -H "Content-Type: application/json" -X POST -d '{"name":"lisheng","email":"lisheng2014@qq.com","password":"password123","passwordConfirm":"password123"}' http://localhost:8761/wyvern/v1/orders/post

curl -H "Content-Type: application/json" -X POST -d '{"name":"lisheng","email":"lisheng2014@qq.com","password":"password123","passwordConfirm":"password123"}' http://localhost:8761/wyvern/v1/orders/post/


http://localhost:8761/wyvern/v1/orders/post/ {"method":"POST","body":"{\"created_date\":\"2019-01-29T04:04:03.258323\",\"order_hash\":\"0x3f8d16507c4d9905815e860324d64b9c9f5933a70e59c2a07a63320459f67826\",\"metadata\":{\"asset\":{\"id\":\"505\",\"address\":\"5FHneW46xGXgs5mUiveU4sbTyGBzmstUspZC92UhjJM694ty\"},\"schema\":\"ERC721\"},\"exchange\":\"5GrwvaEF5zXb26Fz9rcQpDWS57CtERHpNehXCPcNoHGKutQY\",\"maker\":{\"user\":{\"username\":\"alex2\"},\"profile_img_url\":\"https://storage.googleapis.com/opensea-static/opensea-profile/11.png\",\"address\":\"5Gsjmz4mPcK7YrfeHqM8KG4fp5X57fmttPtQM517AFtui5pE\",\"config\":\"affiliate\"},\"taker\":{\"user\":null,\"profile_img_url\":\"https://storage.googleapis.com/opensea-static/opensea-profile/1.png\",\"address\":\"5GrwvaEF5zXb26Fz9rcQpDWS57CtERHpNehXCPcNoHGKutQY\",\"config\":\"\"},\"current_price\":\"10000000000000000\",\"current_bounty\":\"100000000000000.0\",\"maker_relayer_fee\":\"100\",\"taker_relayer_fee\":\"250\",\"maker_protocol_fee\":\"0\",\"taker_protocol_fee\":\"0\",\"maker_referrer_fee\":\"0\",\"fee_recipient\":{\"user\":null,\"profile_img_url\":\"https://storage.googleapis.com/opensea-static/opensea-profile/1.png\",\"address\":\"5GrwvaEF5zXb26Fz9rcQpDWS57CtERHpNehXCPcNoHGKutQY\",\"config\":\"\"},\"fee_method\":1,\"side\":1,\"sale_kind\":0,\"target\":\"5FLSigC9HGRKVhB9FiEo4Y3koPsNmBmLJbpXg2mp1hXcS59Y\",\"how_to_call\":0,\"calldata\":\"0x23b872dd000000000000000000000000e96a1b303a1eb8d04fb973eb2b291b8d591c8f72000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000001f9\",\"replacement_pattern\":\"0x000000000000000000000000000000000000000000000000000000000000000000000000ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0000000000000000000000000000000000000000000000000000000000000000\",\"static_target\":\"5GrwvaEF5zXb26Fz9rcQpDWS57CtERHpNehXCPcNoHGKutQY\",\"static_extradata\":\"0x\",\"payment_token\":\"5Ck5SLSHYac6WFt5UZRSsdJjwmpSZq85fd5TRNAdZQVzEAPT\",\"payment_token_contract\":{\"address\":\"5D4efuAUtmrj6w6U5wqKQ565br2Wj6U69XGuBbf6iaB8hhWQ\",\"image_url\":null,\"name\":\"Wrapped Ether\",\"symbol\":\"WETH\",\"decimals\":18,\"eth_price\":\"1.000000000000000\"},\"base_price\":\"10000000000000000\",\"extra\":\"0\",\"listing_time\":1548734810,\"expiration_time\":0,\"salt\":\"83006245783548033686093530747847303952463217644495033304999143031082661844460\",\"v\":28,\"r\":\"0x2a0b0f3b8e6705cdf7894d9f1fb547646c5502a9d1d993c308ed0310620cf660\",\"s\":\"0x19211a9a0c3ab3bb94b840774a2f9badf637b95d90b68965a4cf3734d5eaba98\",\"cancelled\":false,\"finalized\":false,\"marked_invalid\":false,\"prefixed_hash\":\"0x98a07dfb9e4da7ffc0ad0fb230afc8684dc4a0ac44623eded6a4c42e1df99954\"}","headers":{"X-API-KEY":"testKeyDev","Accept":"application/json","Content-Type":"application/json"}}

```