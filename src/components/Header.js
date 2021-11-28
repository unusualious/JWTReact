import React from 'react'

export default function Header() {
    const a = [1, 10, 100, 1000, 10000];
    
    const listItems = a.map((number) =>
  <li key={number.toString()}>{number}</li>
);
    return (
        <div>
            <p>
                This section is main header of this test project.
            </p>
            <ul className="headerList">
            {listItems}
            </ul>
            <p>
            ()nth-of-type: یک pseudo-class می باشد که به ما این امکان را می دهد تا عناصری از یک نوع خاص که در درون یک نگهدارنده هستند را بر اساس ترتیبشان انتخاب کنیم.

این انتخابگر شبیه به ()nth-child: می باشد با این تفاوت که شمارش بر روی تمام فرزندان یک سطر صورت نمی گیرد بلکه فقط بر روی یک نوع عنصر که انتخابگر بر روی آن اعمال می شود, صورت می گیرد.

به عنوان مثال p:nth-of-type() تمام عناصر پاراگراف را که در درون یک نگهدارنده هستند به صورت یک فیلتر از دیگر فرزندان که پاراگراف نیستند انتخاب می کند و شمارش را فقط بر روی آنها انجام می دهد.

()nth-of-type: یک مقدار مثبت به عنوان آرگومان می پذیرید و بر اساس آن عدد, عنصر مربوطه را انتخاب می کند. به عنوان مثال در زیر چهارمین آیتم از یک لیست انتخاب و استایل دهی شده است:

            </p>
        </div>
    )
}
