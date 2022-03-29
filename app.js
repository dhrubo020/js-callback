const takeOrder=(customer, process_callback_1)=>{
    console.log(`Take order for ${customer}`);
    process_callback_1(customer)
}

const processOrder=(customer, complete_callback_2)=>{
    console.log(`Processing order for ${customer}`)
        
    setTimeout(()=>{
        console.log(`Coockong done for ${customer}`)
        complete_callback_2(customer)
    } , 3000)
}

const completeOrder=(customer, payment_callback_3)=>{
    console.log(`Order completed for ${customer}`);
    payment_callback_3(customer)
}

const makePayment=(customer, exit_callback_3)=>{
    console.log(`Payment done for ${customer}`);
    exit_callback_3(customer)
}

const exit=(customer)=>{
    console.log(`Exit ${customer}`);
}

takeOrder('Customer 1', (customer)=>{ // defination of process_callback_1
    processOrder(customer, (customer)=>{ // defination of complete_callback_2
        completeOrder(customer, (customer)=>{ // defination of payment_callback_3
            makePayment(customer, (customer)=>{ // defination of exit_callback_4
                exit(customer)
            })
        })
    })
})