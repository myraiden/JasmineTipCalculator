describe("Helpers test (with setup and tear-down)", function() {
    beforeAll(function () {
      // initialization logic
      // needs values for allPayments object
      billAmtInput.value=35;
      tipAmtInput.value=15;
      submitPaymentInfo();
      billAmtInput.value=15;
      tipAmtInput.value=5;
      submitPaymentInfo();
      
    });
  
    it('should add all payments together from allPayments()', function () {
      //test sumPaymentTotal()
      expect(sumPaymentTotal('billAmt')).toEqual(50);
      
    });
  
    it('should convert the tip amount into a percent from the bill', function () {
        //test calculateTipPercent()
        let billAmt=sumPaymentTotal('billAmt');
        let tipAmt=sumPaymentTotal('tipAmt')
        expect(calculateTipPercent(billAmt, tipAmt)).toEqual(40);
    
      });

    afterAll(function() {
      // teardown logic
      billAmtInput.value='';
      tipAmtInput.value='';
      allPayments={};
      updateSummary();
    });
  });