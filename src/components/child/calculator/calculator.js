import React, { Fragment } from "react";
class calculator extends React.Component {
    constructor(props) {
        super(props)
        this.handleChangeAsupan = this.handleChangeAsupan.bind(this)
        this.state = {
          daftar_makanan: [
            ['Es Krim Coklat', 12000],
            ['Es Krim Stroberi', 15000],
            ['Es Krim Vanila', 12000],
            ['Es Krim Mint', 12000],
            ['Es Krim Tiramisu', 15000],
            ['Es Krim Matcha', 15000],
    
          ],
          menu: {
            pesanan1: 0,
            pesanan2: 0,
            pesanan3: 0,
          },
          totalpesanan: 0,
          count1: 0,
          count2: 0,
          count3: 0, 
        }
      }
    
      handleCalculation = () => {
        const {
          pesanan1,
          pesanan2,
          pesanan3,

        } = this.state.menu

        const {
            count1,
            count2,
            count3,
            
        } = this.state
        var total = pesanan1 * count1 + pesanan2 * count2 + pesanan3 * count3

        this.setState({
          ...this.state.menu,
          totalpesanan: total,
        }
        )
      }
          
      countUp_1 = () => {
        this.setState({count1: this.state.count1 + 1}, this.handleCalculation)
      }
      countDown_1 = () => {
        this.setState({count1: this.state.count1 - 1}, this.handleCalculation)
      }
      countUp_2 = () => {
        this.setState({count2: this.state.count2 + 1}, this.handleCalculation)
      }
      countDown_2 = () => {
        this.setState({count2: this.state.count2 - 1}, this.handleCalculation)
      }
      countUp_3 = () => {
        this.setState({count3: this.state.count3 + 1}, this.handleCalculation)
      }
      countDown_3 = () => {
        this.setState({count3: this.state.count3 - 1}, this.handleCalculation)
      }
    
      handleChangeAsupan(e) {
        e.preventDefault()
        const { menu } = this.state
        const { name } = e.target
        var index = e.nativeEvent.target.selectedIndex;
        const { value } = e.nativeEvent.target[index];
        this.setState({
          menu: {
            ...menu,
            [name]: Number(value)
          }
        }, this.handleCalculation);
      }
    
    componentDidMount() {
        alert("Silahkan melanjutkan ke pemesanan dan pembayaran")
    }
    componentWillUnmount() {
        return window.confirm('Apa Anda ingin menutup layar pemesanan?');
    }
    render() {
        const {
            daftar_makanan,
            totalpesanan,
          } = this.state

        return (
            <div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
                <h2 className="dark:text-white font-bold text-2xl tracking-tight text-gray-900">
                    Daftar Pesanan
                </h2>
                <div>
                    <div style={{ height: '75%' }}>
                        <div>
                            <div>
                                <select onChange={this.handleChangeAsupan} className = "dark:text-white dark:bg-gray-700" name='pesanan1'>
                                <option value='0'>Pilih Menu</option>
                                <Fragment>
                                    {
                                    daftar_makanan.map(makanan => {
                                        return (
                                        <option value={makanan[1]}>{makanan[0]}</option>
                                        )
                                    })
                                    }
                                </Fragment>
                                </select>
                                <div className = "mt-1 mb-3 grid grid-columns-3 justify-start gap-x-3">
                                    <button onClick = {this.state.count1 > 0 ? this.countDown_1:() => {}} className = "w-7 object-cover p-1 col-start-1 bg-green-500 rounded-full text-sm font-bold text-white">-</button>
                                    <p className = "dark:text-white col-start-2 text-lg">{this.state.count1}</p>
                                    <button onClick = {this.countUp_1} className = "w-7 object-cover p-1 col-start-3 bg-green-500 rounded-full text-sm text-white">+</button>
                                </div>
                                <h3 className = "dark:text-white">+</h3>
                                
                                <select onChange={this.handleChangeAsupan} className = "dark:text-white dark:bg-gray-700" name='pesanan2'>
                                <option value='0'>Pilih Menu</option>
                                <Fragment>
                                    {
                                    daftar_makanan.map(makanan => {
                                        return (
                                        <option value={makanan[1]}>{makanan[0]}</option>
                                        )
                                    })
                                    }
                                </Fragment>
                                </select>
                                <div className = "mt-1 mb-3 grid grid-columns-3 justify-start gap-x-3">
                                    <button onClick ={this.state.count2 > 0 ? this.countDown_2:() => {}} className = "w-7 object-cover p-1 col-start-1 bg-green-500 rounded-full text-sm font-bold text-white">-</button>
                                    <p className = "dark:text-white col-start-2 text-lg">{this.state.count2}</p>
                                    <button onClick = {this.countUp_2} className = "w-7 object-cover p-1 col-start-3 bg-green-500 rounded-full text-sm text-white">+</button>
                                </div>
                                <h3 className = "dark:text-white">+</h3>
                                <select className = "dark:text-white dark:bg-gray-700" onChange={this.handleChangeAsupan} name='pesanan3'>
                                <option value='0'>Pilih Menu</option>
                                <Fragment>
                                    {
                                    daftar_makanan.map(makanan => {
                                        return (
                                        <option value={makanan[1]}>{makanan[0]}</option>
                                        )
                                    })
                                    }
                                </Fragment>
                                </select>
                                <div className = "mt-1 mb-3 grid grid-columns-3 justify-start gap-x-3">
                                    <button onClick = {this.state.count3 > 0 ? this.countDown_3:() => {}} className = "w-7 object-cover p-1 col-start-1 bg-green-500 rounded-full text-sm font-bold text-white">-</button>
                                    <p className = "dark:text-white col-start-2 text-lg">{this.state.count3}</p>
                                    <button onClick = {this.countUp_3} className = "w-7 object-cover p-1 col-start-3 bg-green-500 rounded-full text-sm text-white">+</button>
                                </div>
                                <h3 className = "dark:text-white">=</h3>
                                <h2 className = "dark:text-white">Total Bayar: Rp.{totalpesanan}</h2>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default calculator