interface ICustomerDataAccess {
    GetCustomerName(id: number): string;
}

class CustomerDataAccess implements ICustomerDataAccess {
    public GetCustomerName(id: number): string {
        return "Dummy Customer Name";        
    }
}

class DataAccessFactory
{
    public static GetDataAccessObj(): ICustomerDataAccess 
    {
        return new CustomerDataAccess();
    }
}

class CustomerBusinessLogic {
    _custDataAccess: ICustomerDataAccess ;
    
    constructor() {
        this._custDataAccess = DataAccessFactory.GetDataAccessObj();
    }

    public GetCustomerName() {
        const id = 5;
        return this._custDataAccess.GetCustomerName(id);
    }
}


console.log(new CustomerBusinessLogic().GetCustomerName())
	