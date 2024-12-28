import { server } from './src/mock/server'
import '@testing-library/jest-dom'

beforeAll(() => server.listen())
afterAll(() => server.close())
afterEach(() => server.resetHandlers())
