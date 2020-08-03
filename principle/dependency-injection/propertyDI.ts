interface ICustomerDataAccess {
    getCustomerName(id: number): string;
}

class CustomerDataAccess implements ICustomerDataAccess {
    public getCustomerName(id: number): string {
        return "Dummy Customer Name";        
    }
}

class CustomerBusinessLogic {
    dataAccess: ICustomerDataAccess;

    public getCustomerName(id: number) {
        return this.dataAccess.getCustomerName(id);
    }
}

class CustomerInjector
{
    customerBL: CustomerBusinessLogic;

    constructor()
    {
        this.customerBL = new CustomerBusinessLogic();
        this.customerBL.dataAccess = new CustomerDataAccess()
    }

    public getCustomerName(id: number): string {
       return this.customerBL.getCustomerName(id);
    }
}

console.log(new CustomerInjector().getCustomerName(5))
