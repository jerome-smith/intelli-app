

<Text style={theme.cardContentStyle}>{this.props.person.street}</Text>
<Text style={theme.cardContentStyle}>{this.props.person.suburb}</Text>
<Text style={theme.cardContentStyle}>{this.props.person.province}</Text>

<Text style={theme.cardContentStyle}>{this.props.person.workstreet}</Text>
<Text style={theme.cardContentStyle}>{this.props.person.worksuburb}</Text>
<Text style={theme.cardContentStyle}>{this.props.person.workprovince}</Text>
<Text style={theme.cardContentStyle}>{this.props.person.workphone}</Text>


<Text style={theme.cardContentStyle}>{this.props.person.accountnumber}</Text>
<Text style={theme.cardContentStyle}>{this.props.person.accounttype}</Text>
<Text style={theme.cardContentStyle}>{this.props.person.branchcode}</Text>



{ street, suburb, province, phone, workstreet, worksuburb, workprovince, workphone, company, accountnumber, accounttype, branchcode }


street:'',
suburb:'',
province:'',
phone:'',
workstreet:'',
worksuburb:'',
workprovince:'',
workphone:'',
company:'',
accountnumber:'',
accounttype:'',
branchcode:''

        <MKTextField textInputStyle={styles.fieldStyles} value={this.props.street}
                     onChangeText={value => this.props.formUpdate({prop: 'street', value})}
                     placeholder={'street ...'} tintColor={MKColor.Teal}/>
        <MKTextField textInputStyle={styles.fieldStyles} value={this.props.suburb}
                     onChangeText={value => this.props.formUpdate({prop: 'suburb', value})}
                     placeholder={'suburb ...'} tintColor={MKColor.Teal}/>
        <MKTextField textInputStyle={styles.fieldStyles} value={this.props.province}
                     onChangeText={value => this.props.formUpdate({prop: 'province', value})}
                     placeholder={'province ...'} tintColor={MKColor.Teal}/>
        <MKTextField textInputStyle={styles.fieldStyles} value={this.props.workstreet}
                     onChangeText={value => this.props.formUpdate({prop: 'workstreet', value})}
                     placeholder={'workstreet ...'} tintColor={MKColor.Teal}/>
        <MKTextField textInputStyle={styles.fieldStyles} value={this.props.worksuburb}
                     onChangeText={value => this.props.formUpdate({prop: 'worksuburb', value})}
                     placeholder={'worksuburb ...'} tintColor={MKColor.Teal}/>
        <MKTextField textInputStyle={styles.fieldStyles} value={this.props.workprovince}
                     onChangeText={value => this.props.formUpdate({prop: 'workprovince', value})}
                     placeholder={'workprovince ...'} tintColor={MKColor.Teal}/>
        <MKTextField textInputStyle={styles.fieldStyles} value={this.props.workphone}
                     onChangeText={value => this.props.formUpdate({prop: 'workphone', value})}
                     placeholder={'workphone ...'} tintColor={MKColor.Teal}/>
        <MKTextField textInputStyle={styles.fieldStyles} value={this.props.accountnumber}
                     onChangeText={value => this.props.formUpdate({prop: 'accountnumber', value})}
                     placeholder={'accountnumber ...'} tintColor={MKColor.Teal}/>
        <MKTextField textInputStyle={styles.fieldStyles} value={this.props.accounttype}
                     onChangeText={value => this.props.formUpdate({prop: 'accounttype', value})}
                     placeholder={'accounttype ...'} tintColor={MKColor.Teal}/>
        <MKTextField textInputStyle={styles.fieldStyles} value={this.props.branchcode}
                     onChangeText={value => this.props.formUpdate({prop: 'branchcode', value})}
                     placeholder={'branchcode ...'} tintColor={MKColor.Teal}/>
