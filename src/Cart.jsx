import React from 'react'

export const Cart = ({ cart, setcart }) => {

  const [price, setPrice] = React.useState(0);

  React.useEffect(() => {
    let amount = 0;
    cart.map((prod) => amount += (prod.count * prod.price))
    setPrice(amount);
  })



  const remove = (data) => {
    let removedata = cart.filter((res) => res.id !== data.id);
    setcart(removedata);
  }

  const update = (datas, a) => {
    let ind = cart.indexOf(datas)
    cart[ind].count += a;
    setcart([...cart]);


    if (cart[ind].count < 0) {
      cart[ind].count = 0;

    }

  }
  return (
    <div>
      {

        cart.map((data) =>
          <div className='flexed'>

            <div>

              <img src={data.img} alt="" width="500px" />
            </div>
            <div>


              <p className='content'>{data.content}</p>
              <p className=''>{data.line}</p>
              <img src={data.star} alt="" width="100px" />
              <div className='thinline'></div>



              <h1 className='producting'>Product <span className='dot1'>:</span> {data.count}</h1>
              <h2 className='pricing'>Price      <span className='dot2' >:</span>{data.price}</h2>


              <button className='increasing ' onClick={() => update(data, 1)}>+</button>
              <h1 className='counting'>{data.count}</h1>
              <button className='decreasing' onClick={() => update(data, -1)}>-</button>


              <button type="button" class="btn btn-primary bluebtn" data-bs-toggle="modal" data-bs-target="#exampleModal">Submit</button>


              <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog">
                  <div class="modal-content">
                    <div class="modal-header">
                      <h1 class="modal-title fs-5 diwali" id="exampleModalLabel">Enjoy Diwali Offer</h1>
                      <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                      Order Placed Successfully
                    </div>
                    <div class="modal-footer">
                      <button type="button" class="btn btn-primary" data-bs-dismiss="modal">Close</button>

                    </div>
                  </div>
                </div>
              </div>

  <button className='remove' onClick={() => remove(data)}>Remove</button>

</div>

            <h2 className='total'>Total amount:  {price}</h2>
          </div>)


      }

    </div>
  )
}
