interface ICustomerDataAccess {
    getCustomerName(id: number): string;
}

interface IDataAccessDependency
{
    setDependency(customerDataAccess: ICustomerDataAccess);
}

class CustomerDataAccess implements ICustomerDataAccess {
    public getCustomerName(id: number): string {
        return "Dummy Customer Name";        
    }
}

class CustomerBusinessLogic implements IDataAccessDependency {
    dataAccess: ICustomerDataAccess;

    public getCustomerName(id: number) {
        return this.dataAccess.getCustomerName(id);
    }

    public setDependency(customerDataAccess: ICustomerDataAccess)
    {
        this.dataAccess = customerDataAccess;
    }
}

class CustomerInjector
{
    customerBL: CustomerBusinessLogic;

    constructor()
    {
        this.customerBL = new CustomerBusinessLogic();
        this.customerBL.setDependency(new CustomerDataAccess())
    }

    public getCustomerName(id: number): string {
       return this.customerBL.getCustomerName(id);
    }
}

console.log(new CustomerInjector().getCustomerName(5))
