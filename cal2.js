function ageCal() {
    age = 50;
    sumAge = " ";

    if (age <= 18) {
        sumAge = `อายุของคุณ คือ\ ${age}\nคุณอยู๋ในวัยรุ่น`; 
    } else if ( age >= 18 ) {
        sumAge = `อายุของคุณ คือ\ ${age}\nคุณอยู๋ในวัยงาน`; 
    } else {
        sumAge = `อายุของคุณ คือ\ ${age}\nคุณอยู๋ในวัยชรา`; 
    };

    console.log(sumAge);
};

ageCal();