const {Builder, Capabilities, By} = require('selenium-webdriver')

require('chromedriver')

const driver = new Builder().withCapabilities(Capabilities.chrome()).build()

beforeAll(async () => {
    await driver.get('http://127.0.0.1:5500/movieList/index.html')
})

afterAll(async () => {
    await driver.quit()
})

test('test movie cross off of list', async () => {
    let movieInput = await driver.findElement(By.xpath('//input'))

    await driver.sleep(2000)

    await movieInput.sendKeys('Indiana Jones\n')

    // await driver.findElement(By.xpath('//*[text()."Indiana Jones"]'))
    await driver.sleep(2000)

    await driver.findElement(By.xpath('//li/span')).click()

    await driver.sleep(2000)
    
    const movieCross = await driver.findElement(By.xpath('//*[@class="checked"]'))

    await driver.sleep(2000)

    expect(movieCross).toBeTruthy()
})

test('test movie removal from browser list', async () => {
    let movieInput = await driver.findElement(By.xpath('//input'))

    await driver.sleep(2000)

    await movieInput.sendKeys('Indiana Jones\n')

    await driver.sleep(2000)

    await driver.findElement(By.xpath('//li/button')).click()

    await driver.sleep(2000)
    
    const movieRemove = await driver.findElement(By.xpath('//*[@class="hide"]'))

    await driver.sleep(2000)

    expect(movieRemove).toBeTruthy()
})

test('test movie deletion', async () => {
    let movieInput = await driver.findElement(By.xpath('//input'))

    await driver.sleep(2000)

    await movieInput.sendKeys('Indiana Jones\n')

    await driver.sleep(2000)

    const deleteMovie = await driver.findElement(By.xpath('//li/button')).click()

    await driver.sleep(2000)

    expect(deleteMovie).toBeFalsy()
})


