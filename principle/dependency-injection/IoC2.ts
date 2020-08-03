class CustomerBusinessLogic {
    _dataAccess: DataAccess;
    
    constructor() {
        this._dataAccess = DataAccessFactory.GetDataAccessObj();
    }

    public GetCustomerName() {
        const id = 5;
        return this._dataAccess.GetCustomerName(id);
    }
}

class DataAccess {
    public GetCustomerName(id: number) {
        return "Dummy Customer Name"; // 진짜 DB에서 가져왔다고 가정
    }
}

class DataAccessFactory
{
    public static GetDataAccessObj() 
    {
        return new DataAccess();
    }
}

console.log(new CustomerBusinessLogic().GetCustomerName())
