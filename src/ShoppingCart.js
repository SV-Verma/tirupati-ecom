import React from 'react'
import { TbShoppingCartPlus } from "react-icons/tb";

const ShoppingCart = () => {
  return (
    <div>
      <button className="btn btn-primary" type="icon" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight">
      <TbShoppingCartPlus />
         </button>

<div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
  <div class="offcanvas-header">
    <h5 class="offcanvas-title" id="offcanvasRightLabel">Offcanvas right</h5>
    <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
  </div>
  <div class="offcanvas-body">
    ...
  </div>
</div>
    </div>
  )
}

export default ShoppingCart
