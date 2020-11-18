
// Create a first component <my-counter>


Vue.component('running-balance', {
  data: function () {
    return {
	  balancetwo: "",
	  
	  
	   //
	    //accountdata
	  //
	  
	  //transaction data static for now would be accessed via server call axios or ajax or
	  //built in VUE syntax 
	  accountdata:{
			 message: 'Hello World Vue.js!',
  
				results:{
				"Statement": {
					"Transactions": [{
						"OriginalTraceAuditNo": null,
						"AccountNumber": "123456789",
						"TransactionTypeId": "Debit",
						"TransactionDate": "2020-08-28T03:36:33",
						"BusinessDate": "2020-08-28T03:36:33",
						"AvailableBalance": 400.00,
						"Amount": 12.08,
						"Description": "Other: POS Transaction",
						"Billed": false,
						"MerchantName": "Good Buy",
						"MerchantId": "GbLV-01"
					},
				{
						"OriginalTraceAuditNo": null,
						"AccountNumber": "123456789",
						"TransactionTypeId": "Debit",
						"TransactionDate": "2020-08-28T03:50:01",
						"BusinessDate": "2020-08-28T03:50:01",
						"AvailableBalance": 400.00,
						"Amount": 129.74,
						"Description": "Other: POS Transaction",
						"Billed": false,
						"MerchantName": "Wally World",
						"MerchantId": "WWV-000-1220"
					},
				{
						"OriginalTraceAuditNo": null,
						"AccountNumber": "123456789",
						"TransactionTypeId": "Debit",
						"TransactionDate": "2020-08-28T06:43:12",
						"BusinessDate": "2020-08-28T06:43:12",
						"AvailableBalance": 400.00,
						"Amount": 8.08,
						"Description": "Other: POS Transaction",
						"Billed": true,
						"MerchantName": "Quickly Gas Stop",
						"MerchantId": "QGS-01"
					}],
					"NotSettled": [{
						"OriginalTraceAuditNo": null,
						"AccountNumber": "123456789",
						"TransactionTypeId": "Debit",
						"TransactionDate": "2020-08-28T03:36:33",
						"BusinessDate": "2020-08-28T03:36:33",
						"AvailableBalance": 400.00,
						"Amount": 12.08,
						"Description": "Other: POS Transaction",
						"MerchantName": "Good Buy",
						"MerchantId": "GbLV-01"
					},
				{
						"OriginalTraceAuditNo": null,
						"AccountNumber": "123456789",
						"TransactionTypeId": "Debit",
						"TransactionDate": "2020-08-28T03:50:01",
						"BusinessDate": "2020-08-28T03:50:01",
						"AvailableBalance": 400.00,
						"Amount": 129.74,
						"Description": "Other: POS Transaction",
						"MerchantName": "Wally World",
						"MerchantId": "WWV-000-1220"
					}]
				}
			  }
			  
  
  
  },
	  
	  //
	  //accountdata
	  //
	  
	  
	  
	  
	  
    }
	
	
  },
  
  
  //methods 
  methods: 
  
  {
		 
	  //iterate over json object to get transactions and obtain balance
	  searchObject: function() {
		
		
	
	  var temp=[];
	  
	  var mytransactions;
	  mytransactions=this.accountdata.results.Statement.Transactions.length;
	  
	  var tempBalance;
	  var startBalance;
	  
	  //loop through transactions and push to array
      for (var i = 0; i < this.accountdata.results.Statement.Transactions.length; i++) {
        
		var value=this.accountdata.results.Statement.Transactions[i]
		temp.push(value);
		
      }
	  
	  
		//loop through temp array and look for successful transactions to get current balance 
		for(var x=0;x<=temp.length-1;x++){
			
			var item;
			item=temp[x];
			
			  // at this point if it was billed it is a successful transaction 
			  // otherwise it was not
			 if(item.Billed){
			  
			  //adjust decimal numbers
			  itemDecimalFixed = item.Amount.toFixed(2);
			  itemBalanceFixed= item.AvailableBalance.toFixed(2);
			  
			  //get  balance on beginning balance to current balance
			  tempBalance=itemBalanceFixed-itemDecimalFixed;
			 
			 }
			 
				 
		}
		
	
		 
		 var myObj;
		 myObj={
			transactions: temp,
			running_balance: tempBalance 
		 }
		 
		 // set current balance
		 this.balancetwo=tempBalance;
		 
	     return myObj;
    },
	  
	
	  
	   created: function(){
		  
       
	   } 
	  
        
    },
  
		computed: {
      
		},
  

  //set template to display in html
  template:`
  		<div>
		 <div class="columns ">
		 <div  class="card">
				<div class="card-section">
				<p> 
				<span class="descr">
				Current Ballance
				</span>
				{{ new Intl.NumberFormat('en-US',
				{ style: 'currency', currency: 'USD' }
				).format(this.balancetwo) }} 
				</p>
				</div>
			</div>	  
		</div>	
  
  
		  <div class="columns medium-4" v-for="(result, index) in this.searchObject().transactions">
		  
			<div class="card">
			  
			  <div class="card-section">
				<p> <span class="descr">Account Ending:</span> {{ result.AccountNumber.substr(-3) }} </p>
			  </div>
			  <div class="card-section">
				<p><span class="descr"> Transction Type:</span> {{ result.TransactionTypeId}} </p>
			  </div>
			   <div class="card-section">
				<p> <span class="descr">Transction Date:</span>  {{ new Date(result.TransactionDate).toLocaleString() }} </p>
			  </div>
			  <div class="card-section">
				<p> <span class="descr">Merchant:</span> {{ result.MerchantName }} </p>
			  </div>
			  <div class="card-section">
				<p> 
					<span class="descr">Amount:</span>
					{{ new Intl.NumberFormat('en-US',
					{ style: 'currency', currency: 'USD' }
					).format(result.Amount) }} 
				</p>
			  </div>
			  <div v-if="result.Billed" class="card-section">
				<p> 
				<span class="process-success">
				Transaction Processed  Successfully
				</span> 
				</p>
			  </div>
			  <div  v-else class="card-section">
				<p> 
				<span class="process-fail">
				Transaction Processed Unsuccessfully
				</span>
				</p>
			  </div>
			  
			  <div class="card-section">
				<p>
				<span class="descr"> 
				Starting Ballance:
				</span>  
				{{ new Intl.NumberFormat('en-US',
				{ style: 'currency', currency: 'USD' }
				).format(result.AvailableBalance) }}   
				</p>
			  </div>
			  <div v-if="result.Billed" class="card-section">
				<p> 
				<span class="descr">
				Ending Ballance: 
				</span>
				{{ new Intl.NumberFormat('en-US',
				{ style: 'currency', currency: 'USD' }
				).format(result.AvailableBalance - result.Amount) }}   
				
				</p>
			  </div>
			  <div  v-else class="card-section">
				<p> 
				<span class="descr">
				Ending Ballance: 
				</span>
				{{ new Intl.NumberFormat('en-US',
				{ style: 'currency', currency: 'USD' }
				).format(result.AvailableBalance) }} 
				</p>
			  </div>
			  
			 
			</div>
		  </div>
		  
		</div>
		  
			<div class="card">
				<div class="card-section">
				<p> Ballance {{ this.searchObject().transactions.running_balance}} </p>
				</div>
			</div>	  
		  
 
`
  //test button on accessing data
  //template: `
  //<button @click="searchObject()">Your runnin balance is {{ balance}} times</button>

//`
})


// Create a second component

let app = new Vue({ el: '#enable-vue-here' })