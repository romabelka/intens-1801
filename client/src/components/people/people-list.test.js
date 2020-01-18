import eventually from 'wix-eventually'
import createDriver from './people-list.driver'
const people = [
    {
        id: '123',
        firstName: 'Test',
        lastName: 'User',
        email: 'test@example.com'
    }, {
        id: '124',
        firstName: 'Test1',
        lastName: 'User1',
        email: 'test1@example.com'
    }
]

jest.mock('../../services/api', () => ({
    fetchPeople: () => Promise.resolve([
            {
                id: '123',
                firstName: 'Test',
                lastName: 'User',
                email: 'test@example.com'
            }, {
                id: '124',
                firstName: 'Test1',
                lastName: 'User1',
                email: 'test1@example.com'
            }
        ]
    ),
    onAuthChange: () => {}
}))

describe('PeopleList', () => {
    it('should render a list', async () => {
        const driver = createDriver()

        await eventually(() => {
            driver.update()
            expect(driver.get.listItems().length).toEqual(people.length)
        })
    });

    it('should select person', async () => {
        const driver = createDriver()

        await eventually(() => {
            driver.update()
            expect(driver.get.listItems().length).toEqual(people.length)
        })

        expect(driver.get.isItemActive(0)).toEqual(false)

        driver.when.itemClicked(0)

        expect(driver.get.isItemActive(0)).toEqual(true)

    });
});
