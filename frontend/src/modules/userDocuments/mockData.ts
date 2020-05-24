import { DocumentsListItem } from "../../organisms/shared/documentsList/interfaces";
import { UserCardProps } from "../../organisms/shared/userCard/interfaces";

export const docsData: DocumentsListItem[] = [
    {
      certificate: {
        id: 1,
        name: 'Certificate 1',
        validationTime: 100500,
        hasGroup: false
      },
      userProtocol: {
        id: 1,
        number: '123',
        startDate: new Date(),
        certificateId: 1,
        expiresDate: new Date(),
        userId: '0000-0000-0000-0000',
        file: {
          id: 2,
          name: 'my_proto.pdf'
        }
      }
    },
    {
      certificate: {
        id: 1,
        name: 'Certificate 1',
        validationTime: 100500,
        hasGroup: false
      },
      userCertificate: {
        id: 1,
        number: '123',
        startDate: new Date(),
        certificateId: 1,
        group: 1,
        expiresDate: new Date(),
        userId: '0000-0000-0000-0000',
        file: {
          id: 1,
          name: 'my_cert.pdf'
        }
      },
    },
    {
      certificate: {
        id: 1,
        name: 'Certificate 1',
        validationTime: 100500,
        hasGroup: false
      },
      userCertificate: {
        id: 1,
        number: '123',
        startDate: new Date(),
        certificateId: 1,
        group: 1,
        expiresDate: new Date(),
        userId: '0000-0000-0000-0000',
        file: {
          id: 1,
          name: 'my_cert.pdf'
        }
      },
      userProtocol: {
        id: 1,
        number: '123',
        startDate: new Date(),
        certificateId: 1,
        expiresDate: new Date(),
        userId: '0000-0000-0000-0000',
        file: {
          id: 2,
          name: 'my_proto.pdf'
        }
      }
    },
  ];

export const user: UserCardProps = {
  firstName: "f_name",
  lastName: "l_name",
  middleName: "m_name",
  email: "example@exam.com",
  contactPhoneNumber: "+7-999-888-77-66",
  position: "admin"
}